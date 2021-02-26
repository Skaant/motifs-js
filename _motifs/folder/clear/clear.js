import {
  FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED,
  FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED
} from './clear.errors.js'
import removeFolder from './_utils/removeFolder/removeFolder.js'

/** Given a path (or an array of path),
 *  removes target folder and its content
 *  (see `@note` for usage).
 * 
 * **Also removes their presence in `global[FILES]`.**
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