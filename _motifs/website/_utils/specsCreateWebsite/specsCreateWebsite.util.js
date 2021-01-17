import fileMotif from "../../../file/file.motif.js"
import folderMotif from "../../../folder/folder.motif.js"
import websiteFolderMotif from "../../../website-folder/website-folder.motif.js"

/** Creates an `<id>/<id>.website.js` tree
 * at given scope. */
export default async (scope, id, content = '{}') => {
  const folderPath = scope + '/' + id
  await folderMotif.create(folderPath)
  await fileMotif.create(
    folderPath,
    id + '.website.js',
    () => `
import websiteFolderMotif from "../../_motifs/website-folder/website-folder.motif.js";
import websitePageMotif from "../../_motifs/website-page/website-page.motif.js";

export default {
  id: '${ id }',
  title: 'SPEC, the motifs-js test framework',
  url: 'test.lol',
  provision: async () => ({}),
  mapping: data => (${ content })
}`
  )
  return
}