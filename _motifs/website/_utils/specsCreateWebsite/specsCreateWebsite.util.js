import { NODE_MODULE } from "../../../global/_enums/frameworkPath/frameworkPath.enum.js"
import { FRAMEWORK_PATH } from "../../../global/_enums/names/global.names.enum.js"
import fileMotif from "../../../file/file.motif.js"
import folderMotif from "../../../folder/folder.motif.js"

/** Creates an `<id>/<id>.website.js` tree
 * at given scope. */
export default async (scope, id, content = '{}') => {
  const folderPath = scope + '/' + id
  await folderMotif.create(folderPath)
  await fileMotif.create(
    folderPath,
    id + '.website.js',
    () => `
import websiteFolderMotif from "${
  global[FRAMEWORK_PATH] === NODE_MODULE
    ? (scope.split('/').map(() => '../')
      + '../node_modules/motifs-js')
    : '../..' }/_motifs/website-folder/website-folder.motif.js";
import websitePageMotif from "${
  global[FRAMEWORK_PATH] === NODE_MODULE
    ? (scope.split('/').map(() => '../')
      + '../node_modules/motifs-js')
    : '../..' }/_motifs/website-page/website-page.motif.js";

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