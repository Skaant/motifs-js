import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import copyWay from "./_ways/copy/copy.way.js";
import _specs from "./_props/_specs/index.js";
import clearWay from "./_ways/clear/clear.way.js";

export default {
  id: 'folder',
  names: namesProp,
  description: descriptionProp,
  create: createWay,
  copy: copyWay,
  clear: clearWay,
  _specs
}