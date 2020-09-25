import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import buildWay from './_ways/build/build.way.js'
import _commands from './_props/_commands/index.js'
import _specs from './_props/_specs/index.js'
import regExpMappingWay from './_ways/regExpMapping/regExpMapping.way.js'

export default {
  id: 'website',
  names: namesProp,
  regExp: /^\/_websites\/(.*)\/(.*).website.js/,
  regExpMapping: regExpMappingWay,
  description: descriptionProp,
  build: buildWay,
  _commands,
  _specs
}