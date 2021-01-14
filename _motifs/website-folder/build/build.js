import fileMotif from "motifs-js/_motifs/file/file.motif.js"
import folderMotif from "motifs-js/_motifs/folder/folder.motif.js"
import { ELEM_MOTIF_UNRECOGNIZED } from "./_errors/build.errors.js"
import websiteFolderMotif from "motifs-js/_motifs/website-folder/website-folder.motif.js"
import websitePageMotif from "motifs-js/_motifs/website-page/website-page.motif.js"

/** 
 * @param {websiteFolderDescription} description
 *  A website folder description.
 * 
 * @returns An object with the `sitemap` value.
 */
async function recursiveBuilder(description, scope) {
  const acc = { sitemap: {} }
  const {
    motif,
    ...content
  } = description
  /** @todo ? Control `motif` === websiteFolderDescription.id */
  for (const key in content) {
    const elem = content[key]
    switch (elem.motif) {
      
      case websiteFolderMotif.id:
        const path = scope + '/' + key
        await folderMotif.create(path)
        acc.sitemap[path] = (await recursiveBuilder(elem)).sitemap
        break

      case websitePageMotif.id:
        const fileName = key || 'index.html'
        websitePageMotif.build()
        acc.sitemap[scope + '/' + fileName] = elem.sitemap
        break

      default:
        throw new Error(ELEM_MOTIF_UNRECOGNIZED)
    }
  }
  return acc
}

export default recursiveBuilder