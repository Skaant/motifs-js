import globalNamesEnum, { FRAMEWORK_PATH } from "../../global/_enums/names/global.names.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";

export default ({
  type: MODULE,
  /**
   * Understand that in order for `init.spec` to run,
   *  the framework should have already been initialized.
   * 
   * In consequence, the tests will be run against
   *  the actual application `global` variable.
   * 
   * @note Of course we'd like to test the values
   *  of these global properties, some requiring to re-run
   *  the `init.js` script.
   */
  group: Object.keys(globalNamesEnum).map(key => ({
    type: FEATURE,
    label: `\`global.\`${ key } should be set.`,
    test: () => !!global[key] || key === FRAMEWORK_PATH
  }))
})