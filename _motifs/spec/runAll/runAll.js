import formatEnum from "../../get/_enums/format/format.enum.js";
import INSTANCE from "../../instance/instance.motif.js";
import runOne from "../runOne/runOne.js";
import SPEC from "../spec.motif.js";

export default options => new Promise(resolve =>

  INSTANCE.get(SPEC, { format: formatEnum.ESM })
    .then(specs => Promise.all(
      specs.map(spec => runOne(spec, options)))
        .then(results => resolve(results))))