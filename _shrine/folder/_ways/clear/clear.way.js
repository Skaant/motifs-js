import { promises as fs } from 'fs'

/** FOLDER CLEAR WAY
 * 
 * Given a path,
 *  removes target folder and
 *  clear its content.
 * 
 * @param {string} path Relative path,
 *  from project root (`global.PATH`) to target folder.
 */
export default path =>

  fs.rmdir(
    path,
    {
      recursive: true
    })