import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import readmeWay from "./_ways/readme/readme.way.js";
import getWay from "./_ways/get/get.way.js";
import cliWay from "./_ways/cli/cli.way.js";
import _commands from "./_props/_commands/index.js";

export default {
  id: 'kami',
  names: namesProp,
  description: descriptionProp,
  _commands,
  create: createWay,
  readme: readmeWay,
  get: getWay,
  cli: cliWay
}