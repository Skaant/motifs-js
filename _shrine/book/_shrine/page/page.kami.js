import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'page',
  names: namesProp,
  description: descriptionProp,
  regExp: /\/_pages\/(.*)\/(.*)\.page\.js/
}