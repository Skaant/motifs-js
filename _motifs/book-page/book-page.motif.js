import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'
import BOOK from '../book/book.motif.js'

export default {
  id: 'page',
  parents: [ BOOK.id ],
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    regExp: /\/_pages\/(.*)\/(.*)\.page\.js/,
    transform: ([ _, folderName, fileName ]) => ({
      folderName,
      fileName
    })
  }],
  get: getWay,
  provision: provisionWay
}