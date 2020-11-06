import namesProp from "./_props/names/names.prop.js";
import createWay from "./_ways/create/create.way.js";
import get from "./get/get.js";
import cliWay from "./_ways/cli/cli.way.js";
import _commands from "./_props/_commands/index.js";
import flavourProp from "./_props/flavour/flavour.prop.js";
import testWay from "./_ways/test/test.way.js";
import specs from "./_props/specs/index.js";
import _specs from "./_props/_specs/index.js";
import aveWay from "./_ways/ave/ave.way.js";

export default {
  id: 'motif',
  symbol: '⚇',
  names: namesProp,
  occurences: [
    {
      regExp: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
      transform: ([ _, scope, folderName, id ]) => ({
        id,
        scope,
        folderName,
        fileName: id + '.motif.js'
      })
    }
  ],
  flavour: flavourProp,
  _commands,
  create: createWay,
  get,
  cli: cliWay,
  test: testWay,
  specs,
  _specs,
  ave: aveWay
}