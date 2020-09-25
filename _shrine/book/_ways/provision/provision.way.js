import FILE from '../../../file/file.kami.js'
import formatEnum from '../../../file/_ways/get/_enums/format/format.enum.js'
import SECTION from '../../_shrine/section/section.kami.js'
import PAGE from '../../_shrine/page/page.kami.js'
import EXTRACT from '../../_shrine/extract/extract.kami.js'
import IMAGE from '../../_shrine/image/image.kami.js'

/**
 * Given a BOOK ESM module,
 *  retrieve sections,
 *  pages and extracts in
 *  given scope,
 *  to build a complete BOOK object.
 */
export default (book, options) =>

  new Promise(resolve => {

    const splitFilePath = book.filePath.split('/')
    const bookScope = splitFilePath.slice(
      0,
      splitFilePath.length - 1
    ).join('/')

    const options = {
      format: formatEnum.ESM,
      scope: bookScope
    }

    Promise.all([
      FILE.get(
        SECTION,
        options
      ),
      FILE.get(
        PAGE,
        options
      ),
      FILE.get(
        EXTRACT,
        options
      ),
      FILE.get(
        IMAGE,
        {
          format: formatEnum.FILE_PATH,
          scope: bookScope
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
          ...book,
          scope: bookScope,
          sections,
          pages,
          extracts,
          images
        }))
  })