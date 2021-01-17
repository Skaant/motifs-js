import { CASE, FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import build from './build.js'
import folderMotif from "../../folder/folder.motif.js";
import websiteFolderMotif from "../website-folder.motif.js";
import fs from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";
import { NOT_A_WEBSITE_FOLDER_SHAPE, NO_SCOPE_GIVEN } from "./_errors/build.errors.js";
import websitePageMotif from "../../website-page/website-page.motif.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a `name` folder at given `path`.',
      test: async () => {
        const path = '_tests/website-folder-build-one'
        await folderMotif.create(path)
        const name = 'mirador-78'
        await build(
          name,
          websiteFolderMotif.shape({}),
          path
        )
        try {
          fs.statSync(global[PROJECT_PATH]
            + '/' + path
            + '/' + name)
          return true
        } catch {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: 'Iterates on `content` property to '
        + 'render folder\'s children (W_FOLDER & W_PAGE).',
      group: [
        {
          type: FEATURE,
          label: 'When a page name is `\'\'`, '
            + 'replace it with `index.html`.',
          test: async () => {
            const path = '_tests/w-f-build-page-empty-name'
            await folderMotif.create(path)
            const name = 'kokoamo-3'
            await build(
              name,
              websiteFolderMotif.shape({
                '': websitePageMotif.shape(() => '')
              }),
              path
            )
            try {
              fs.statSync(global[PROJECT_PATH]
                + '/' + path
                + '/' + name
                + '/index.html')
              return true
            } catch {
              return false
            }
          }
        },
        {
          type: FEATURE,
          label: 'Build the static website tree according to '
            + 'the W_PAGE shape given.',
          test: async () => {
            const path = '_tests/website-folder-build-page-call'
            await folderMotif.create(path)
            const name = 'varimatras'
            await build(
              name,
              websiteFolderMotif.shape({
                '': websitePageMotif.shape(() => '', {}),
                'about': websitePageMotif.shape(() => '', {}),
                'articles': websiteFolderMotif.shape({
                  1: websitePageMotif.shape(() => '', {}),
                  2: websitePageMotif.shape(() => '', {}) 
                })
              }),
              path)
            try {
              const sitePath = global[PROJECT_PATH] + '/' + path + '/' + name
              fs.statSync(sitePath + '/index.html')
              fs.statSync(sitePath + '/about')
              fs.statSync(sitePath + '/about/index.html')
              fs.statSync(sitePath + '/articles/1')
              fs.statSync(sitePath + '/articles/1/index.html')
              fs.statSync(sitePath + '/articles/2')
              fs.statSync(sitePath + '/articles/2/index.html')
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
      label: 'Create a sitemap for the WEBSITE.',
      group: [
        {
          type: 'CASE',
          label: 'Returns an object with the `sitemap` property.',
          test: async () => {
            const path = '_tests/website-folder-sitemap'
            await folderMotif.create(path)
            const name = 'fr-2021'
            const result = await build(
              name,
              websiteFolderMotif.shape({}),
              path
            )
            return !!result.sitemap
          }
        },
        {
          type: 'CASE',
          label: 'Sitemap mimics website folder tree.',
          test: async () => {
            const path = '_tests/website-folder-sitemap-full'
            await folderMotif.create(path)
            const name = 'fr-2021'
            const result = await build(
              name,
              websiteFolderMotif.shape({
                '': websitePageMotif.shape(() => '', {}),
                'storyboards': websiteFolderMotif.shape({
                  '': websitePageMotif.shape(() => '', {}),
                  'ave-hol-adin': websiteFolderMotif.shape({
                    1: websitePageMotif.shape(() => '', {}),
                    2: websitePageMotif.shape(() => '', {})
                  })
                })
              }),
              path
            )
            return result.sitemap.length === 4
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Controls inputs.',
      group: [
        {
          type: CASE,
          label: 'Control that a `scope` is given',
          test: async () => {
            try {
              await build(
                'test',
                { motif: 'none' })
              return false
            } catch (err) {
              return err.message
                === NO_SCOPE_GIVEN
            }
          }
        },
        {
          type: CASE,
          label: 'Control that `shape` holds a `motif` '
            + 'property with `websiteFolderPage.id` value',
          test: async () => {
            try {
              await build(
                'test',
                { motif: 'none' },
                '')
              return false
            } catch (err) {
              return err.message
                === NOT_A_WEBSITE_FOLDER_SHAPE
            }
          }
        }
      ]
    }
  ]
}