import fs from 'fs'

/** Creates a folder with given `name`
 *  at given a `scope`.
 *  
 * On successful creation,
 *  execute the `callback` method with
 *  newly created folder path as
 *  lower elements (folders and files) scope.
 * 
 * @param {string} scope Should start without `"/"`.
 *  **Relative path** from project root (`global.PROJECT_PATH`) to target
 *  destination folder.
 * @param {string} name The future folder name.
 * @param {(folderScope: string) => Array<Promise>} callback
 *  The callback expect an array of Promises,
 *  made of both `FOLDER.create()` and `PAGE.create()`,
 *  to be returned.
 *  These will be the content of the newly created folder.
 */
export default (
  scope,
  name,
  callback
) =>

  new Promise((resolve, reject) => {

    const folderScope = scope + '/' + name
    const folderPath = global.PROJECT_PATH
      + ( folderScope[0] === '/' ? '' : '/' )
      + folderScope

    fs.exists(
      folderPath,
      exists => {
        
        if (exists) {

          Promise.all(callback(folderScope))
            .then(() => resolve())
        
        } else {
          
          fs.mkdir(
            folderPath,
            err => {
              
              if (err) reject(err)
              
              Promise.all(callback(folderScope))
                .then(() => resolve())
            })
        }
      })
  })