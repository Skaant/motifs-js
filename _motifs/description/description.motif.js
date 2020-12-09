import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'description',
  symbol: '▼',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /(.*)\/([\w|\-]*)\/description\/description\.md$/,
    transform: ([ _, scope, motifId ]) => ({
      scope,
      motifId
    })
  }]
}