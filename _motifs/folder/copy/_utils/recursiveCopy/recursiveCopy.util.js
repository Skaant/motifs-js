import {
  default as fsForSync,
  promises as fs,
  constants as fsConstants
} from 'fs'
import { FILES } from '../../../../global/_enums/names/global.names.enum'

const recursiveCopy = (
  src,
  scope,
  dest,
  options
) =>

  new Promise(resolve => {

    fs.readdir(
      global.PROJECT_PATH
        + '/' + src
        + '/' + scope,
      {
        withFileTypes: true
      })
      
      .then(dirents =>
        
        Promise.all(dirents.map(dirent => {

          const scopeName = scope
            + '/' + dirent.name

          if (dirent.isDirectory()) {

            const dirName = global.PROJECT_PATH
              + dest + scopeName

            if (!fsForSync.existsSync(dirName)) {

              fsForSync.mkdirSync(dirName)
              global[FILES].push(dirName)
            }

            return recursiveCopy(
              src,
              scopeName,
              dest,
              options
            )

          } else {

            global[FILES].push(dest + scopeName)
            return fs.copyFile(
              global.PROJECT_PATH
                + src + scopeName,
              global.PROJECT_PATH
                + dest + scopeName,
              options.force
                ? fsConstants.COPYFILE_FICLONE

                : fsConstants.COPYFILE_EXCL
            )
          }
        }))
        
        .then(resolve))
  })

export default recursiveCopy