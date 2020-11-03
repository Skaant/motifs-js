import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import BOOK from '../book/book.motif.js'

export default {
  id: 'book-extract',
  parents: [ BOOK.id ],
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    regExp: /\/_extracts\/(.*)\/(.*)\.extract\.js/,
    transform: ([ _, folderName, fileName ]) => ({
      folderName,
      fileName
    })
  }]
}