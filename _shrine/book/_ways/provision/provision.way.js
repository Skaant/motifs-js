import SECTION from '../../_shrine/section/section.kami.js'
import PAGE from '../../_shrine/page/page.kami.js'
import EXTRACT from '../../_shrine/extract/extract.kami.js'
import IMAGE from '../../_shrine/image/image.kami.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'
import INSTANCE from '../../../instance/instance.kami.js'

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
      INSTANCE.get(
        SECTION,
        options
      ),
      INSTANCE.get(
        PAGE,
        options
      ),
      INSTANCE.get(
        EXTRACT,
        options
      ),
      INSTANCE.get(
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