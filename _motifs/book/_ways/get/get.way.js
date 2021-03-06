import BOOK from '../../book.motif.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'
import INSTANCE from '../../../instance/instance.motif.js'

/**
 * Retrieve BOOK and its content tree
 *  (SECTIONS, PAGES, EXTRACTS and IMAGES).
 */
export default (
  motif = BOOK,
  id = false,
  options
) => 

  new Promise(resolve => {

    INSTANCE.get(
      motif,
      {
        format: formatEnum.ESM
      })

      .then(books => {

        if (id) {

          const book = books.find(book =>
            
            book.id === id)

          if (!book) throw new Error('No book "'
            + id + '".')

          BOOK.provision(book)
            .then(resolve)

        } else {

          Promise.all(books.map(book =>
            
            BOOK.provision(book)))

            .then(books =>
          
              resolve(books))
        }
      })
  })