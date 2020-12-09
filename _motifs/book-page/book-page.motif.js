import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'

export default {
  id: 'book-page',
  names: namesProp,
  description: descriptionProp,
  occurences: [/* {
    regExp: /\/_pages\/(.*)\/(.*)\.page\.js/,
    transform: ([ _, folderName, fileName ]) => ({
      folderName,
      fileName
    })
  } */],
  get: getWay,
  provision: provisionWay
}