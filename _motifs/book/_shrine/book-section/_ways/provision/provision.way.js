import BOOK_SECTION from '../../book-section.kami.js'
import BOOK_PAGE from '../../../book-page/book-page.kami.js'
import BOOK_EXTRACT from '../../../book-extract/book-extract.motif.js'
import BOOK_IMAGE from '../../../book-image/book-image.kami.js'
import INSTANCE from '../../../instance/instance.kami.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'

/**
 * Given a BOOK_SECTION ESM module,
 *  retrieve sub-sections,
 *  pages and extracts, if any,
 *  in given scope,
 *  to build a complete BOOK_SECTION object.
 * 
 * @note Beware about the fact that
 *  BOOK_SECTION.provision is consumed by BOOK.provision.
 */
export default (section, options) =>

  new Promise(resolve => {

    const splitFilePath = section.filePath.split('/')
    const scope = splitFilePath.slice(
      0,
      splitFilePath.length - 1
    ).join('/')

    Promise.all([
      BOOK_SECTION.get(
        scope,
        options
      ),
      BOOK_PAGE.get(
        scope + '/_pages',
        options
      ),
      INSTANCE.get(
        BOOK_EXTRACT,
        {
          ...options,
          format: formatEnum.ESM,
          scope: scope + '/_extracts'
        }
      ),
      INSTANCE.get(
        BOOK_IMAGE,
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