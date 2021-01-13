import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import create from "./create/create.js";
import copyWay from "./_ways/copy/copy.way.js";
import clearWay from "./_ways/clear/clear.way.js";

export default {
  id: 'folder',
  symbol: '◰',
  names: namesProp,
  description: descriptionProp,
  create,
  copy: copyWay,
  clear: clearWay
}