import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import getWay from "./_ways/get/get.way.js";
import cliWay from "./_ways/cli/cli.way.js";
import _commands from "./_props/_commands/index.js";
import flavourProp from "./_props/flavour/flavour.prop.js";
import testWay from "./_ways/test/test.way.js";
import specs from "./_props/specs/index.js";
import _specs from "./_props/_specs/index.js";
import aveWay from "./_ways/ave/ave.way.js";

export default {
  id: 'kami',
  names: namesProp,
  description: descriptionProp,
  occurences: [
    {
      regExp: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
      transform: ([ _, scope, folderName, fileName ]) => ({
        id: (scope ? `(${ scope }) ` : '') + fileName,
        scope,
        folderName,
        fileName
      })
    },
    /** @deprecated */
    {
      regExp: /(.*)\/_shrine\/(.*)\/(.*).kami.js/,
      transform: ([ _, scope, folderName, fileName ]) => ({
        id: (scope ? `(${ scope }) ` : '') + fileName + '*',
        scope,
        folderName,
        fileName
      })
    }
  ],
  flavour: flavourProp,
  _commands,
  create: createWay,
  get: getWay,
  cli: cliWay,
  test: testWay,
  specs,
  _specs,
  ave: aveWay
}