import fs from 'fs'

/** FILE CREATE WAY
 * 
 * Given a `scope` and a `name`,
 *  creates a new file.
 * 
 * `callback` returns data
 *  for file to be filled with.
 * 
 * @param {string} scope
 * @param {string} name
 * @param {(folderScope: string) => string} callback
 *  Returned `string` is file content.
 */
export default (
  scope,
  name,
  callback
) =>

  new Promise((resolve, reject) => {

    const filePath = global.PATH
      + '/' + scope 
      + '/' + name

    fs.writeFile(
      filePath,
      callback(scope),
      err => err ? reject(err) : resolve())
  })