import { MODULE, CASE, FEATURE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import build from '../../website/build/build.js'
import fs from 'fs'
import exclusionRules from "../../motif/init/exclusionRules.js";
import getFiles from '../../motif/init/_utils/getFiles/getFiles.js'
import { FILES, PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";
import { INCLUDE } from "../../motif/init/_utils/getFiles/_enums/rules/rules.enum.js";
import specsCreateWebsiteUtil from "../../website/_utils/specsCreateWebsite/specsCreateWebsite.util.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a folder with given id for name, '
        + 'in a `_build` folder at an optionaly given dist.',
      group: [
        {
          type: CASE,
          label: 'No dist is given : '
            + '`_build` is created at the folder root.',
          test: async () => {
            const id = 'website-build-no-dist'
            const buildFullPath = global[PROJECT_PATH] + '/_build/' + id
            try {
              /* Removes existing folder if test failed to
                * delete it on previous run. */
              fs.rmSync(
                buildFullPath,
                { recursive: true }
              )
            } catch {}
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
              fs.statSync(buildFullPath)
              fs.rmSync(
                buildFullPath,
                { recursive: true }
              )
              return true
            } catch {
              return false
            }
          }
        },
        {
          type: CASE,
          label: 'dist is given : `_build` is created there.',
          test:  async () => {
            const id = 'website-build-dist'
            await specsCreateWebsiteUtil('_tests', id)
            global['_' + FILES] = global[FILES]
            global[FILES] = getFiles(
              '',
              {
                ...exclusionRules,
                '_tests': INCLUDE
              })
            const distPath = '_tests/' + id + '/_build'
            await build(
              id,
              { dist: distPath }
            )
            global[FILES] = global['_' + FILES]
            try {
              fs.statSync(global[PROJECT_PATH]
                + '/' + distPath)
              return true
            } catch {
              return false
            }
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Generates a `sitemap.xml` file at the '
        + '`dest` folder root.',
      group: [
        {
          type: CASE,
          label: 'Sitemap has been generated',
          test: async () => {
            const id = 'website-build-sitemap'
            await specsCreateWebsiteUtil('_tests', id)
            global['_' + FILES] = global[FILES]
            global[FILES] = getFiles(
              '',
              {
                ...exclusionRules,
                '_tests': INCLUDE
              })
            const distPath = '_tests/' + id + '/_build'
            await build(
              id,
              { dist: distPath }
            )
            global[FILES] = global['_' + FILES]
            try {
              fs.statSync(global[PROJECT_PATH]
                + '/' + distPath
                + '/' + id
                + '/sitemap.xml')
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