import fs from 'fs'
import { PROJECT_PATH } from '../../../../global/_enums/names/global.names.enum.js'
import { EXCLUDE } from './_enums/rules/rules.enum.js'

/** 
 * Recursively list folders & files in the
 *  given path. Specific folders can be excluded
 *  and re-included.
 * 
 * @param {string} folderPath The folder
 *  to retrieve content from
 * @param {Object|null} exclusionRules An
 *  object containing exclusion as well as
 *  re-inclusion rules
 * 
 * @return {[string]} An array of folders and
 *  files name.
 */
const recursiveFolderRetriever = (
  folderPath,
  exclusionRules = false
) => {
  
  const dirents = fs.readdirSync(
    global.PROJECT_PATH + '/' + folderPath,
    {
      withFileTypes: true
    }
  )

  return dirents.reduce(
    (
      tree,
      dirent
    ) => {

      const name = folderPath + '/' + dirent.name

      /** The `dirent` is a folder */
      if (dirent.isDirectory()) {

        if (exclusionRules) {
          
          const item = exclusionRules[dirent.name]

          if (item === EXCLUDE) {

            return tree

          } else if (typeof item === 'object'
            && item.rule === EXCLUDE
            && item.subs) {

            return [
              ...tree,
              ...Object.entries(item.subs)
                .filter(([ key ]) => {
                  try {
                    fs.statSync(global[PROJECT_PATH] + '/' + name + '/' + key)
                    return true
                  } catch {
                    return false
                  }
                })
                .map(([ key, value ]) => {

                  const direntName = name + '/' + key

                  if (fs.statSync(global[PROJECT_PATH] + '/' + direntName).isDirectory()) 

                    return [
                      direntName,
                      ...recursiveFolderRetriever(
                        name + '/' + key,
                        // For sub-subs
                        typeof value === 'object' ? value : false
                      )
                    ]

                  return direntName
                })
                .flat()
            ]
          } else {

            return [
              ...tree,
              name,
              ...recursiveFolderRetriever(
                name,
                typeof item === 'object'
                  && item.subs
              )
            ]
          }

        } else {

          return [
            ...tree,
            name,
            ...recursiveFolderRetriever(name)
          ]
        }
        /** The dirent is a file */
      } else {
        
        if (exclusionRules
          && exclusionRules[dirent.name] === EXCLUDE) {

          return tree
        }

        return [
          ...tree,
          name
        ]
      }
    },
    [])
}

export default recursiveFolderRetriever