import folderMotif from "../../folder/folder.motif.js"
import { ELEM_MOTIF_UNRECOGNIZED, NOT_A_WEBSITE_FOLDER_SHAPE, NO_SCOPE_GIVEN } from "./_errors/build.errors.js"
import websiteFolderMotif from "../../website-folder/website-folder.motif.js"
import websitePageMotif from "../../website-page/website-page.motif.js"
import jsontoxml from 'jsontoxml'
import fileMotif from "../../file/file.motif.js"

/** 
 * @param {websiteFoldershape} shape
 *  A website folder shape.
 * 
 * @returns An object with the `sitemap` value.
 */
async function recursiveBuilder(name, shape, scope) {
  if (!scope && scope !== '')
    throw new Error(NO_SCOPE_GIVEN)
  const {
    motif,
    content
  } = shape
  if (motif !== websiteFolderMotif.id)
    throw new Error(NOT_A_WEBSITE_FOLDER_SHAPE)
  const acc = { sitemap: {} }
  const path = scope + '/' + name
  await folderMotif.create(path)
  
  for (const key in content) {
    const value = content[key]
    switch (value.motif) {
      
      case websiteFolderMotif.id:
        await folderMotif.create(path)
        acc.sitemap[path] = (await recursiveBuilder(
          key,
          value,
          path
        )).sitemap
        break

      case websitePageMotif.id:
        const fileName = key || 'index.html'
        await websitePageMotif.build(
          fileName,
          value,
          path
        )
        acc.sitemap[scope + '/' + fileName] = value.sitemap
        break

      default:
        throw new Error(ELEM_MOTIF_UNRECOGNIZED)
    }
  }
  return acc
}

export default recursiveBuilder