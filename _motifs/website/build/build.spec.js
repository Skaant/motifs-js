import { MODULE, CASE, FEATURE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import build from 'motifs-js/_motifs/website/build/build.js'
import fs from 'fs'
import exclusionRules from "motifs-js/_motifs/motif/init/exclusionRules.js";
import getFiles from 'motifs-js/_motifs/motif/init/_utils/getFiles/getFiles.js'
import { FILES, PROJECT_PATH } from "motifs-js/_motifs/global/_enums/names/global.names.enum.js";
import { INCLUDE } from "motifs-js/_motifs/motif/init/_utils/getFiles/_enums/rules/rules.enum.js";
import specsCreateWebsiteUtil from "motifs-js/_motifs/website/_utils/specsCreateWebsite/specsCreateWebsite.util.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a folder with given id for name, '
        + 'in a `_build` folder at an optionaly given dest.',
      group: [
        {
          type: FEATURE,
          label: 'Creates a `_build` folder at optionaly given dest.',
          group: [
            {
              type: CASE,
              label: 'No dest is given : '
                + '`_build` is created at the folder root.',
              test: async () => {
                const id = 'website-build-no-dest'
                await specsCreateWebsiteUtil('_tests', id)
                global['_' + FILES] = global[FILES]
                global[FILES] = getFiles(
                  '',
                  {
                    ...exclusionRules,
                    '_tests': INCLUDE
                  })
                await build(id, {})
                global[FILES] = global['_' + FILES]
                try {
                  fs.statSync(global[PROJECT_PATH] + '/_build/' + path)
                  fs.rmdirSync(global[PROJECT_PATH] + '/_build/' + path)
                  return true
                } catch {
                  return false
                }
              }
            },
            {
              type: CASE,
              label: 'Dest is given : `_build` is created there.',
              test:  async () => {
                const id = 'website-build-dest'
                await specsCreateWebsiteUtil('_tests', id)
                global['_' + FILES] = global[FILES]
                global[FILES] = getFiles(
                  '',
                  {
                    ...exclusionRules,
                    '_tests': INCLUDE
                  })
                await build(
                  id,
                  { dest: '_tests/' + id + '/_build' }
                )
                global[FILES] = global['_' + FILES]
                try {
                  const completeDestPath = global[PROJECT_PATH]
                    + '/_tests/' + id
                    + '/_build/' + path
                  fs.statSync(completeDestPath)
                  return true
                } catch {
                  return false
                }
              }
            }
          ]
        }
      ]
    }
  ]
}