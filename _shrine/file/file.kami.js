import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import getWay from "./_ways/get/get.way.js";
import copyWay from "./_ways/copy/copy.way.js";

export default {
  id: 'file',
  names: namesProp,
  description: descriptionProp,
  create: createWay,
  get: getWay,
  copy: copyWay
}