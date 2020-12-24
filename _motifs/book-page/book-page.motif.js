import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'book-page',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /(.*)\/_pages\/([\w|\-]*)\/([\w|\-]*)\.page\.js/,
    transform: ([ path, folderName, fileName ]) => ({
      path,
      folderName,
      fileName
    })
  }],
  get: getWay,
  provision: provisionWay
}