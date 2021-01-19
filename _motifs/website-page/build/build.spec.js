import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import formatEnum from "../../get/_enums/format/format.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import websitePageMotif from "../website-page.motif.js";
import build from "./build.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Given a name, a W_PAGE shape and a `scope`, '
        + 'build an HTML page at the target path.',
      test: async () => {
        const path = '_tests/website-page-build'
        await folderMotif.create(path)
        const templateContent = '<html></html>'
        await build(
          'index.html',
          {
            motif: websitePageMotif.id,
            template: () => templateContent
          },
          path
        )
        try {
          const { content } = await fileMotif.get(
            path + '/index.html',
            { format: formatEnum.UTF_8 }
          )
          return content.localeCompare(templateContent)
            === 0
        } catch {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: 'Shape template is rendered with its own data',
      test: async () => {
        const path = '_tests/website-page-build-template-data'
        await folderMotif.create(path)
        const testText = 'hello bobby my name is hello'
        await build(
          'index.html',
          {
            motif: websitePageMotif.id,
            template: ({ testText }) => testText,
            data: { testText }
          },
          path
        )
        try {
          const { content } = await fileMotif.get(
            path + '/index.html',
            { format: formatEnum.UTF_8 }
          )
          return content.localeCompare(testText)
            === 0
        } catch {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: 'If `shape.data` contains an `images: '
        + '[ \'url\' ]` property, copy given images to '
        + 'the `dest` folder.',
      test: async () => {
        const path = '_tests/website-page-build-copy-images'
        await folderMotif.create(path)
        await build(
          'index.html',
          {
            motif: websitePageMotif.id,
            template: () => '',
            data: {
              images: [ 'logo.svg' ]
            }
          },
          path
        )
        try {
          const result = fileMotif.get(
            path + '/index.html',
            { format: formatEnum.UTF_8 }
          )
          return !!result
        } catch {
          return false
        }
      }
    }
  ]
}