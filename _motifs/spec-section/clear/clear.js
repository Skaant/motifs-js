import { promises as fs } from 'fs'
import folderMotif from '../../folder/folder.motif.js'
import { FILES } from '../../global/_enums/names/global.names.enum.js'

async function dirOrFileClear(path) {
  try {
    const stats = await fs.stat(path)
    if (stats.isDirectory()) {
      await folderMotif.clear(path)
    } else if (stats.isFile()) {
      /** @todo Replace with a `fileMotif.clear()` function. */
      await fs.rm(path)
      global[FILES] = global[FILES].filter(_path =>
        _path !== ('/' + path))
    }
  } catch (err) {
    if (err.code !== 'ENOENT')
      throw err
  }
  return
}

/** Given a path or an array of path,
 *  depending either they are folder or file,
 *  removes them.
 * 
 * @param {string|string[]} clear */
export default async clear => {
  if (typeof clear === 'string') {
    await dirOrFileClear(clear)
  } else if (Array.isArray(clear)) {
    for (const path in clear) {
      await dirOrFileClear(path)
    }
  } /** else error */
  return
}