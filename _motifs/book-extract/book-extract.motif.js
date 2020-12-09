import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'book-extract',
  names: namesProp,
  description: descriptionProp,
  occurences: [/* {
    regExp: /\/_extracts\/(.*)\/(.*)\.extract\.js/,
    transform: ([ _, folderName, fileName ]) => ({
      folderName,
      fileName
    })
  } */]
}