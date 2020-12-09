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
import occurenceLevelEnum from "../occurence/_enums/level/occurence.level.enum.js";

export default {
  id: 'motif',
  symbol: '⚇',
  names: namesProp,
  occurences: [
    {
      level: occurenceLevelEnum.FILE,
      fileMatch: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
      transform: ([ path, scope, folder, id ]) => ({
        path,
        id,
        scope,
        folder
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