import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'
import BOOK from '../book/book.motif.js'

export default {
  id: 'section',
  parents: [ BOOK.id ],
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    regExp: /^\/_data\/(.*)\/_sections\/(.*)\/(.*)\.section\.js/,
    transform: ([ _, dataScope, folderName, fileName ]) => ({
      dataScope,
      folderName,
      fileName
    }),

  }],
  get: getWay,
  provision: provisionWay
}