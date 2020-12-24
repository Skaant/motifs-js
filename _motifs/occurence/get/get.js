import occurenceLevelEnum from "../_enums/level/occurence.level.enum.js";
import getErrors from "./get.errors.js";
import folderMatchFixRegExpEnd from "./_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.js";

export default (occurence, { scope = false }) =>

  new Promise((resolve, reject) => {

    const { transform } = occurence
    
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

      case occurenceLevelEnum.FILE:

        resolve(global.FILES.filter(path =>
            (!scope || path.startsWith('/' + scope))
              && path.match(occurence.fileMatch))
          .map(path => transform(path.match(occurence.fileMatch))))

      case occurenceLevelEnum.PROP:

        resolve(global.FILES.filter(path =>
            path.match(occurence.fileMatch))
          .map(path => transform(path.match(occurence.fileMatch))))
        /** @todo */

      default:
        reject(new Error(getErrors.NOT_AN_OCCURENCE_LEVEL))
    }
  })