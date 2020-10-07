import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import copyWay from './_ways/copy/copy.way.js'

export default {
  id: 'image',
  names: namesProp,
  description: descriptionProp,
  regExp: /\.(png|jpg|svg)$/,
  copy: copyWay
}