import namesProp from "./_props/names/names.prop.js";
import createWay from "./_ways/create/create.way.js";
import get from "./get/get.js";
import cliWay from "./_ways/cli/cli.way.js";
import _commands from "./_props/_commands/index.js";
import flavourProp from "./_props/flavour/flavour.prop.js";
import init from "./init/init.js";
import occurenceLevelEnum from "../occurence/_enums/level/occurence.level.enum.js";
import SPEC from "../spec/spec.motif.js";

export default {
  id: 'motif',
  symbol: '⚇',
  names: namesProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
    transform: ([ path, scope, folder, id ]) => ({
      path,
      id,
      scope,
      folder
    })
  }],
  init,
  flavour: flavourProp,
  _commands,
  create: createWay,
  get,
  cli: cliWay,
  test: SPEC.runAll
}