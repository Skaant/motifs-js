import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import runOne from "./runOne.js";
import { promises as fs } from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'If `options.clearTests` is set to `true`, '
        + 'removes `/_tests` folder content',
      clear: '_temp_spec-run-one-removes-tests.spec.js',
      /** To check if `_tests` is removed, we'll :
       *  * Create a file `_tests/temp.txt`,
       *  * Call the `runOne` function we want to test,
       *  * Check if `temp.txt` has been removed.
       * 
       * @note In fact `_tests` is re-created during
       *  `runOne` execution, so we cannot test post-run
       *  `_tests` folder deletion.
       * 
       * That's why we check its content deletion. */
      test: async () => {
        await folderMotif.clear('_tests')
        await folderMotif.create('_tests')
        await fileMotif.create(
          '_tests',
          'temp.txt',
          () => 'none')
        // We check `temp.txt` exists
        await fs.stat(global[PROJECT_PATH] + '/_tests/temp.txt')
        const specPath = '_temp_spec-run-one-removes-tests.spec.js'
        await fileMotif.create(
          '',
          specPath,
          () => `
import { MODULE } from "./_motifs/spec-section/_enums/type/spec-section.type.enum.js"

export default {
  type: MODULE,
  group: []
}
`
        )
        await runOne(
          specPath,
          {
            clearTests: true
          })
        try {
          await fs.stat(global[PROJECT_PATH] + '/_tests/temp.txt')
          return false
        } catch (err) {
          return err.code === 'ENOENT'
        }
      }
    }
  ]
}