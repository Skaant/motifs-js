import FILE from '../../../file/file.kami.js'
import BOOK from '../../book.kami.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'
import INSTANCE from '../../../instance/instance.kami.js'

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

        Promise.all(books.map(book =>
          
          BOOK.provision(book)))

          .then(books =>
        
            resolve(books))
      })
  })