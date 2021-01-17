import fileMotif from "../../../file/file.motif.js"
import folderMotif from "../../../folder/folder.motif.js"
import websiteFolderMotif from "../../../website-folder/website-folder.motif.js"

/** Creates an `<id>/<id>.website.js` tree
 * at given scope. */
export default async (scope, id, content = {}) => {
  const folderPath = scope + '/' + id
  await folderMotif.create(folderPath)
  await fileMotif.create(
    folderPath,
    id + '.website.js',
    () => `export default {
  id: '${ id }',
  content: ${ JSON.stringify(content) }
}`
  )
  return
}