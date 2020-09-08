import fs from 'fs'

/** FOLDER CREATE WAY
 * 
 * Given a `scope` and a `name`,
 *  creates a new folder.
 *  
 * On successful creation,
 *  execute the `callback` method with
 *  newly created folder scope.
 * 
 * `callback` is expected to
 *  send back an array of
 *  folder elements (folders and files)
 *  creation promises.
 * 
 * Main promise is expected to
 *  resolve once all `callback`'s promises
 *  did resolve first.
 * 
 * @param {string} scope
 * @param {string} name
 * @param {(folderScope: string) => Array<Promise>} callback
 */
export default (
  scope,
  name,
  callback
) =>

  new Promise((resolve, reject) => {

    const folderScope = scope + '/' + name
    const folderPath = global.PATH + '/' + folderScope

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