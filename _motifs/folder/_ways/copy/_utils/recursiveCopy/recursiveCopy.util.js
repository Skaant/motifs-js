import {
  default as fsForSync,
  promises as fs,
  constants as fsConstants
} from 'fs'

const recursiveCopy = (
  src,
  scope,
  dest,
  options
) =>

  new Promise(resolve => {

    fs.readdir(
      global.PATH
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

            const dirName = global.PATH
              + dest + scopeName

            if (!fsForSync.existsSync(dirName)) {

              fsForSync.mkdirSync(dirName)
            }

            return recursiveCopy(
              src,
              scopeName,
              dest,
              options
            )

          } else {

            return fs.copyFile(
              global.PATH
                + src + scopeName,
              global.PATH
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