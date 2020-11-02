import BOOK from '../../book.motif.js'
import formatEnum from '../../../../_shrine/get/_enums/format/format.enum.js'
import INSTANCE from '../../../../_shrine/instance/instance.kami.js'

/**
 * Retrieve BOOK and its content tree
 *  (SECTIONS, PAGES, EXTRACTS and IMAGES).
 */
export default (
  kami = BOOK,
  id = false,
  options
) => 

  new Promise(resolve => {

    INSTANCE.get(
      kami,
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