import fs from 'fs/promises'
import { PROJECT_PATH } from '../../global/_enums/names/global.names.enum.js'

async function createFolderRecursively(scope, path) {
  const splitPath = path.split('/')
  const folderPath = scope + '/' + splitPath[0]
  const completeFolderPath = global[PROJECT_PATH] + '/' + folderPath
  try {
    await fs.stat(completeFolderPath)
  } catch {
    await fs.mkdir(completeFolderPath)
  }
  if (splitPath[1])
  await createFolderRecursively(
    folderPath,
    splitPath.slice(1).join('/')
  )
  return
}

/** Creates a folder at given `path`.
 * 
 * If folders in the path don't exist,
 *  they're safely created.
 * 
 * @param {string} path From root (without `/`) to folder.
 */
export default async path =>

  await createFolderRecursively('', path)