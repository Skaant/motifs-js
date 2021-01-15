import { CASE, FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import build from './build.js'
import sinon from 'sinon'
import websitePageBuild from '../../website-page/build/build.js'
import folderMotif from "../../folder/folder.motif.js";
import websiteFolderMotif from "../website-folder.motif.js";
import fs from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Given a WEBSITE_FOLDER SHAPE, '
        + 'create a folder and sub-folders (see below for '
        + 'mixed [+ WEBSITE_PAGE] creation content).',
      group: [
        {
          type: CASE,
          label: 'One-level SHAPE.',
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
        }
      ]
    },
    {
      type: FEATURE,
      label: 'For each WEBISTE_PAGE in content, '
        + 'the WEBSITE_PAGE `build` should be call once.',
      test: async () => {
        /* const spy = sinon.spy(websitePageBuild)
        await build('', {})
        const callCount = spy.callCount
        spy.restore()
        return callCount === 0 */
        return false
      }
    },
    {
      type: FEATURE,
      label: 'Returns an object with the `sitemap` property.',
      group: []
    },
    {
      type: FEATURE,
      label: 'Given a scope, build the folder at location.',
      group: []
    }
  ]
}