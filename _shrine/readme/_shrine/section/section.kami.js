import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import createWay from './_ways/create/create.way.js'

export default {
  id: 'section',
  names: namesProp,
  description: descriptionProp,
  regExp: [
    /^\/_readme\/_sections\/(.*)\/(.*)\.section.js/,
    /\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/
  ],
  create: createWay
}