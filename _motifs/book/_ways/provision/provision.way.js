import BOOK_SECTION from '../../../book-section/book-section.motif.js'

/**
 * Given a BOOK ESM module,
 *  retrieve sections,
 *  pages and extracts in
 *  given scope,
 *  to build a complete BOOK object.
 */
export default (book, options) =>

  new Promise(resolve => {

    BOOK_SECTION.provision(
      book,
      options
    )
      .then(resolve)
  })