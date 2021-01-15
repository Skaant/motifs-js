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
      label: 'Given a name, a description and a `scope`, '
        + 'build a HTML page at the target path.',
      test: async () => {
        const path = '_tests/website-page-build'
        await folderMotif.create(path)
        await build(
          'index.html',
          {
            motif: websitePageMotif.id,
            template: () => '<html></html>'
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