import folderMotif from "../../../../folder/folder.motif.js";
import { NODE_MODULE, STANDALONE } from "../../../../global/_enums/frameworkPath/frameworkPath.enum.js";
import { FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import { NODE_MODULE_NOT_FOUND } from "./getFrameworkPath.errors.js";
import getFrameworkPath from "./getFrameworkPath.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'If project path points to a `motifs-js` folder, '
        + 'should return `frameworkPathEnum.STANDALONE`.',
      test: () => STANDALONE
        === getFrameworkPath('C://dev/motifs-js') 
    },
    {
      type: FEATURE,
      label: 'If project path points to a something else than `motifs-js` folder, '
        + '**and /node_modules/motifs-js exists**, '
        + 'returns `frameworkPathEnum.NODE_MODULE`.',
      test: async () => {
        await folderMotif.create('_tests/node_modules/motifs-js')
        return getFrameworkPath(global.PROJECT_PATH + '/_tests')
          === NODE_MODULE
      }
    },
    {
      type: FEATURE,
      label: 'Project path ends with a `something-else`, '
        + 'should throw a `getFrameworkPathErrors.NODE_MODULES_NOT_FOUND`.',
      test: () => {
        try {
          getFrameworkPath('C://dev/something-else')
          return false
        } catch (err) {
          return err.message === NODE_MODULE_NOT_FOUND
        }
      }
    }
  ]
}