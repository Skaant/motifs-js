import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import buildWay from './_ways/build/build.way.js'
import _commands from './_props/_commands/index.js'
import _specs from './_props/_specs/index.js'

export default {
  id: 'website',
  names: namesProp,
  regExp: /^\/_websites\/(.*)\/(.*).website.js/,
  description: descriptionProp,
  build: buildWay,
  _commands,
  _specs
}