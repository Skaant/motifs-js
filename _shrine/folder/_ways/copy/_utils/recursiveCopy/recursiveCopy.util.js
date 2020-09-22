import { promises as fs } from 'fs'

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
        
        Promise.all(dirents.map(async dirent => {

          const scopeName = scope
            + '/' + dirent.name

          if (dirent.
            isDirectory()) {

            await fs.mkdir(global.PATH
              + '/' + src
              + '/' + scopeName)
            
            return recursiveCopy(
              src,
              scopeName,
              dest,
              options
            )

          } else {

            return fs.copyFile(
              global.PATH
                + '/' + src
                + scopeName,
              global.PATH
                + '/' + dest
                + scopeName
            )
          }
        }))
        
        .then(resolve))
  })

export default recursiveCopy