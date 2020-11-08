import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'description',
  symbol: '▼',
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    regExp: /(.*)\/([\w|\-]*)\/description\/description\.md$/,
    transform: ([ _, scope, motifId ]) => ({
      scope,
      motifId
    })
  }]
}