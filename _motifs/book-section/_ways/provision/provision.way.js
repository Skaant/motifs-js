import SECTION from '../../book-section.motif.js'
import PAGE from '../../../book-page/book-page.motif.js'
import EXTRACT from '../../../book-extract/book-extract.motif.js'
import IMAGE from '../../../book-image/book-image.motif.js'
import INSTANCE from '../../../../_shrine/instance/instance.kami.js'
import formatEnum from '../../../../_shrine/get/_enums/format/format.enum.js'

/**
 * Given a SECTION ESM module,
 *  retrieve sub-sections,
 *  pages and extracts, if any,
 *  in given scope,
 *  to build a complete SECTION object.
 * 
 * @note Beware about the fact that
 *  SECTION.provision is consumed by BOOK.provision.
 */
export default (section, options) =>

  new Promise(resolve => {

    const splitFilePath = section.filePath.split('/')
    const scope = splitFilePath.slice(
      0,
      splitFilePath.length - 1
    ).join('/')

    Promise.all([
      SECTION.get(
        scope,
        options
      ),
      PAGE.get(
        scope + '/_pages',
        options
      ),
      INSTANCE.get(
        EXTRACT,
        {
          ...options,
          format: formatEnum.ESM,
          scope: scope + '/_extracts'
        }
      ),
      INSTANCE.get(
        IMAGE,
        {
          ...options,
          format: formatEnum.FILE_PATH,
          scope: scope + '/_images'
        }
      )
    ])

      .then(([
        sections,
        pages,
        extracts,
        images
      ]) =>
      
        resolve({
          ...section,
          scope,
          sections,
          pages,
          extracts,
          images: images.length > 0
            ? images

            : false
        }))

      .catch(err =>
        
        console.error(err))
  })