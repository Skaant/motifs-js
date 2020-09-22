import FILE from "../../../file/file.kami.js";
import KAMI from "../../kami.kami.js";
import formatEnum from "../../../file/_ways/get/_enums/format/format.enum.js";

let cache = {
  globalFiles: false,
  kamis: false
};

/** `kami get way`
 * 
 * Retrieve all project kamis,
 *  and order them by dependency ranks.
 */
export default (id = false, options) =>

  new Promise((resolve, reject) => {

    if (cache.globalFiles === global.FILES
        && cache.kamis)
        
      resolve(cache.kamis)

    cache.globalFiles = global.FILES

    FILE.get(
      KAMI,
      {
        format: formatEnum.ESM
      })
      .then(files => {
        
        const kamis = files.map(({ filePath, ...content }) => {

          const protoKami = filePath.match(KAMI.regExp)
          
          return {
            ...content,
            parents: protoKami[1]
              ? protoKami[1]
                .replace(/_shrine\//g, '')
                .split('/')
                .slice(1)
              : false,
            scope: protoKami[1],
            folder: protoKami[2],
            file: protoKami[3] + '.kami.js'
          }
        })

        cache.kamis = kamis

        resolve(kamis)
      })
  })