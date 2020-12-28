import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'book-extract',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /\/_extracts\/([\w|\-]*)\/([\w|\-]*)\.extract\.js/,
    transform: ([ path, folderName, fileName ]) => ({
      path,
      folderName,
      fileName
    })
  }]
}