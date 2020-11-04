import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'spec',
  names: namesProp,
  description: descriptionProp,
  regExp: /(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/,
}