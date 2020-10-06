import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import getWay from './_ways/get/get.way.js'
import provisionWay from './_ways/provision/provision.way.js'

export default {
  id: 'section',
  names: namesProp,
  description: descriptionProp,
  regExp: /^\/_data\/(.*)\/_sections\/(.*)\/(.*)\.section\.js/,
  get: getWay,
  provision: provisionWay
}