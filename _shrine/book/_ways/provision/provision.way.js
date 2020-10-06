import SECTION from '../../_shrine/section/section.kami.js'

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

    SECTION.provision(
      book,
      options
    )
      .then(resolve)
  })