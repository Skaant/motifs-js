import { MODULE, CASE, FEATURE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import build from '../../website/build/build.js'
import fs from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";
import specsCreateWebsiteUtil from "../../website/_utils/specsCreateWebsite/specsCreateWebsite.util.js";
import fileMotif from "../../file/file.motif.js";
import formatEnum from "../../get/_enums/format/format.enum.js";

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

            await build(id, {})
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
            
            const distPath = '_tests/' + id + '/_build'
            await build(
              id,
              { dist: distPath }
            )
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
            const distPath = '_tests/' + id + '/_build'
            await build(
              id,
              { dist: distPath }
            )
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
        },
        {
          type: CASE,
          label: 'Sitemap has been generated',
          test: async () => {
            const id = 'website-build-sitemap-content'
            await specsCreateWebsiteUtil(
              '_tests',
              id,
              `
  { 
    '': websitePageMotif.shape(() => '', {})
  }`
            )
            const distPath = '_tests/' + id + '/_build'
            await build(
              id,
              { dist: distPath }
            )
            try {
              const { content } = await fileMotif.get(
                distPath
                  + '/' + id
                  + '/sitemap.xml',
                { format: formatEnum.UTF_8 })
              return content.startsWith('<')
                && content.endsWith('>')
            } catch {
              return false
            }
          }
        }
      ]
    }
  ]
}