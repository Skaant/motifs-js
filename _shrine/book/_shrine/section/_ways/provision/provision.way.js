import SECTION from '../../section.kami.js'
import PAGE from '../../../../_shrine/page/page.kami.js'
import EXTRACT from '../../../../_shrine/extract/extract.kami.js'
import IMAGE from '../../../../_shrine/image/image.kami.js'
import INSTANCE from '../../../../../instance/instance.kami.js'
import formatEnum from '../../../../../get/_enums/format/format.enum.js'

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