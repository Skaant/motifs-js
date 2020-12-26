import occurenceLevelEnum from "../_enums/level/occurence.level.enum.js";
import getErrors from "./get.errors.js";
import folderMatchFixRegExpEnd from "./_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.js";
import fixSlashFirst from './_utils/fixSlashFirst/fixSlashFirst.js'

export default (occurence, options = {}) =>

  new Promise((resolve, reject) => {

    const { transform } = occurence
    const {
      scope = false
    } = options
    
    switch (occurence.level) {

      case occurenceLevelEnum.FOLDER:
        
        const fixedFolderMatch = folderMatchFixRegExpEnd(occurence.folderMatch)
        resolve(global.FILES.reduce((acc, path) => {
          const matchResult = (!scope || path.startsWith(scope))
            && path.match(fixedFolderMatch)
          if (matchResult) {
            return [
              ...acc,
              transform(matchResult)
            ]
          }
          return acc
        }, []))

        break

      case occurenceLevelEnum.FILE:

        resolve(global.FILES.filter(path =>
            (!scope || fixSlashFirst(path).startsWith(fixSlashFirst(scope)))
              && path.match(occurence.fileMatch))
          .map(path => transform(path.match(occurence.fileMatch))))

        break

      case occurenceLevelEnum.PROP:

        resolve(global.FILES.filter(path =>
            path.match(occurence.fileMatch))
          .map(path => transform(path.match(occurence.fileMatch))))
        /** @todo */

        break

      default:
        reject(new Error(getErrors.NOT_AN_OCCURENCE_LEVEL))
    }
  })