import fileMotif from "motifs-js/_motifs/file/file.motif.js";
import folderMotif from "motifs-js/_motifs/folder/folder.motif.js";
import { MODULE, CASE, FEATURE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import build from './build.js'
import fs from 'fs'
import exclusionRules from "motifs-js/_motifs/motif/init/exclusionRules.js";
import getFiles from 'motifs-js/_motifs/motif/init/_utils/getFiles/getFiles.js'
import { FILES, PROJECT_PATH } from "motifs-js/_motifs/global/_enums/names/global.names.enum.js";
import { INCLUDE } from "motifs-js/_motifs/motif/init/_utils/getFiles/_enums/rules/rules.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a folder with given id for name, '
        + 'in a `_build` folder at an optionaly given scope.',
      group: [
        {
          type: FEATURE,
          label: 'Creates a `_build` folder at optionaly given scope.',
          group: [
            {
              type: CASE,
              label: 'No scope is given : '
                + '`_build` is created at the folder root.',
              test: async () => {
                // Test path
                const path = 'website-build-no-scope'
                // Creates an instance of WEBSITE
                await folderMotif.create(
                  '_tests',
                  path,
                  folderScope => [
                    fileMotif.create(
                      folderScope,
                      path + '.website.js',
                      () => `export default {
                        id: '${ path }',
                        provision: async () => {},
                        mapping: () => []
                      }`
                    )
                  ]
                )
                global['_' + FILES] = global[FILES]
                global[FILES] = getFiles(
                  '',
                  {
                    ...exclusionRules,
                    '_tests': INCLUDE
                  })
                await build(path, {})
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
              label: 'Scope is given : `_build` is created there.',
              test: () => false
            }
          ]
        }
      ]
    }
  ]
}