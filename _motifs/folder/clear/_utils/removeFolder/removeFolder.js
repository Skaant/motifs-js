import { promises as fs } from 'fs'
import { FILES, PROJECT_PATH } from '../../../../global/_enums/names/global.names.enum.js'

/** Executes an async `rmdir` on
 *  `global[PROJECT_PATH] + '/' + path`. */
export default async function(path) {

  await fs.rmdir(
    global[PROJECT_PATH] + '/' + path,
    {
      recursive: true
    })

  global[FILES] = global[FILES].filter(filePath =>
    !path.match(new RegExp('^' + filePath)))

  return true
}