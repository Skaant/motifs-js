import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import get from './get/get.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'article',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /.*_data\/articles\/(\d*)\/(\d*).article.js/,
    transform: ([ path, folder, id ]) => ({ path, id, folder })
  }],
  get
}