import fs from 'fs'
import { FILES } from '../../global/_enums/names/global.names.enum.js'

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
  callback,
  {
    log,
    force
  } = {}
) =>

  new Promise((resolve, reject) => {

    const filePath = scope + '/'
      + name
    const completeFilePath = global.PROJECT_PATH
      + (scope[0] === '/' ? '' : '/' )
      + filePath

    fs.exists(
      completeFilePath,
      exists => {

        if (exists && !force) {

          reject(new Error(completeFilePath + ' already exists !'
            + '\nOperation aborted.'))
        }

        fs.writeFile(
          completeFilePath,
          callback(scope),
          err => {
            err && reject(err)
            global[FILES].push((filePath[0] === '/' ? '' : '/' )
              + filePath)
            resolve()
          })
      }
    )
  })