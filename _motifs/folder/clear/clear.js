import { promises as fs } from 'fs'
import { PROJECT_PATH } from '../../global/_enums/names/global.names.enum.js'
import {
  FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED,
  FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED
} from './clear.errors.js'

/** Executes an async `rmdir` on
 *  `global[PROJECT_PATH] + '/' + path`. */
async function removeFolder(path) {
  return await fs.rmdir(
    global[PROJECT_PATH] + '/' + path,
    {
      recursive: true
    })
}

/** FOLDER CLEAR WAY
 * 
 * Given a path,
 *  removes target folder and
 *  clear its content.
 * 
 * @param {string|string[]} path Relative path,
 *  **or relative path array**,
 *  from project root (`global.PROJECT_PATH`)
 *  to target folder(s).
 */
export default async path => {

  if (typeof path === 'string') {

    await removeFolder(path)

  } else if (Array.isArray(path)) {

    for (const item of path) {

      if (typeof item === 'string')
        await removeFolder(item)
      
      else throw new Error(FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED)
    }
  
  } else throw new Error(FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED)
}