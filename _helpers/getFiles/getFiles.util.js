import fs from 'fs'

/** 
 * Recursively list folders & files in the scope tree whom
 *  path is given in parameters.
 * 
 * @param {string} path The scope tree
 * 
 * @todo Refactor to Promise
 */
const recursiveDirReader = (scope, nested = false) => {
  
  const dirents = fs.readdirSync(
    global.PATH + '/' + scope,
    {
      withFileTypes: true
    }
  )

  return dirents.reduce(
    (
      tree,
      dirent
    ) => {

      const name = scope + '/' + dirent.name

      /** The `dirent` is a file */
      if (!dirent.isDirectory()) {

        return nested
          ? {
            ...tree,
            /** Temporary shape of a file.
             * 
             * @todo Replace with pattern `file`.
             */
            [name]: true
          }

          : [
            ...tree,
            name
          ]

      /** The `dirent` is a folder */
      } else {

        /** Exclusion */
        if (dirent.name === '.git'
          || dirent.name === '.vscode'
          || dirent.name === 'node_modules') {

          return tree
        }

        return nested
          ? {
            ...tree,
            [dirent.name]: recursiveDirReader(
              name,
              nested
            )
          }

          : [
            ...tree,
            name,
            ...recursiveDirReader(
              name,
              nested
            )
          ]
      }
    },
    nested
      ? {}
      
      : [])
}

export default recursiveDirReader