import formatEnum from "../../get/_enums/format/format.enum.js";
import INSTANCE from "../../instance/instance.motif.js";
import runOne from "../runOne/runOne.js";
import SPEC from "../spec.motif.js";
import breakLevelsEnum from "../_enums/breakLevels/breakLevels.enum.js";
import runAllErrors from "./runAll.errors.js";
import specSectionResultCounter from './_utils/specSectionResultCounter/specSectionResultCounter.js'

export default options => new Promise((resolve, reject) =>

  INSTANCE.get(SPEC, { format: formatEnum.ESM })
    .then(async specs => {
      const results = []
      for (const spec of specs) {
        options.log && console.log('\n' + spec.path + '\n')
        const { result } = await runOne(spec, options)
        results.push(result)
      }

      const [ count, total ] = specSectionResultCounter({ result: results })
      
      options.log && console.log('\nTESTS results : ' + count + '/' + total)

      if (count < total &&
        (options.breakLevel === breakLevelsEnum.HARD
          || !options.breakLevel)) {
        reject(new Error(runAllErrors.TEST_FAILED))
      }

      resolve(results)
    }))