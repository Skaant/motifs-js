import namesProp from "./_props/names/names.prop.js";
import buildWay from "./_ways/build/build.way.js";
import _commands from "./_props/_commands/index.js";
import descriptionProp from "./_props/description/description.prop.js";

export default {
  id: 'readme',
  names: namesProp,
  description: descriptionProp,
  build: buildWay,
  _commands
}