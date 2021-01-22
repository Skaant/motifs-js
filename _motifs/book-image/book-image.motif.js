import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import copyWay from './_ways/copy/copy.way.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'book-image',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /.*_data\/(.*)\/([\w|\-]*)\.(png|jpg|svg)$/,
    transform: ([ path, scope, id ]) => ({ path, scope, id })
  }],
  copy: copyWay
}