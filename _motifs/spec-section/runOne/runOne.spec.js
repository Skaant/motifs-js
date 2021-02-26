import folderMotif from "../../folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "../_enums/type/spec-section.type.enum.js";
import runOne from "./runOne.js";
import {
  promises as fs,
  mkdirSync
} from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Removes SPEC_SECTION `clear` property content '
        + 'a first time before running.',
      test: async () => {
        const folderPath = '_tests/spec_section-runOne-clear-before'
        await folderMotif.create(folderPath)
        const { result } = await runOne({
          type: FEATURE,
          label: 'test',
          clear: folderPath,
          test: async () => {
            try {
              await fs.stat(global[PROJECT_PATH]
                + '/' + folderPath)
              return false
            } catch (err) {
              return err.code === 'ENOENT'
            }
          }
        })
        return result.result
      }
    },
    {
      type: FEATURE,
      label: 'Removes SPEC_SECTION `clear` property content '
        + 'a second time before running.',
      /** A separation between `async` and not is made due to
       *  `runOne` algo being conditionaly directed,
       *  based on its function nature. */
      group: [
        {
          type: CASE,
          label: 'SPEC_SECTION is not an `async` function.',
          test: async () => {
            const folderPath = '_tests/spec_section-runOne-clear-after-sync'
            await folderMotif.create(folderPath)
            await runOne({
              type: FEATURE,
              label: 'test',
              clear: folderPath,
              test: () => {
                mkdirSync(global[PROJECT_PATH]
                  + '/' + folderPath)
                return true
              }
            })
            try {
              await fs.stat(global[PROJECT_PATH]
                + '/' + folderPath)
              return false
            } catch (err) {
              return err.code === 'ENOENT'
            }
          }
        },
        {
          type: CASE,
          label: 'SPEC_SECTION is an `async` function.',
          test: async () => {
            const folderPath = '_tests/spec_section-runOne-clear-after-async'
            await folderMotif.create(folderPath)
            await runOne({
              type: FEATURE,
              label: 'test',
              clear: folderPath,
              test: async () => {
                await folderMotif.create(folderPath)
                return true
              }
            })
            try {
              await fs.stat(global[PROJECT_PATH]
                + '/' + folderPath)
              return false
            } catch (err) {
              return err.code === 'ENOENT'
            }
          }
        }
      ]
    }
  ]
}