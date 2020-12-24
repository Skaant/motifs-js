import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'book',
  symbol: '▥',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /^\/_data(.*)\/([\w|\-]*)\/([\w|\-]*)\.book\.js/,
    transform: ([ _, dataScope, folderName, fileName ]) => ({
      dataScope,
      folderName,
      fileName
    })
  }],
  get: getWay,
  provision: provisionWay
}