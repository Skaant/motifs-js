import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import create from "./create/create.js";
import get from "./get/get.js";
import copy from "./copy/copy.js";

export default {
  id: 'file',
  symbol: '▤',
  names: namesProp,
  description: descriptionProp,
  create,
  get,
  copy
}