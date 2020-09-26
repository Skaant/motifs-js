import namesProp from "./_props/names/names.prop.js";
import buildWay from "./_ways/build/build.way.js";
import _commands from "./_props/_commands/index.js";
import descriptionProp from "./_props/description/description.prop.js";
import getWay from "./_ways/get/get.way.js";

export default {
  id: 'readme',
  names: namesProp,
  description: descriptionProp,
  get: getWay,
  build: buildWay,
  _commands
}