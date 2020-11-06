import MOTIF from "../motif.motif.js";
import formatEnum from "../../get/_enums/format/format.enum.js";
import INSTANCE from "../../instance/instance.motif.js";
import FILE from "../../file/file.motif.js";

let cache = {
  globalFiles: false,
  motifs: false
};

/** `kami get way`
 * 
 * Retrieve all MOTIFS,
 *  and order them by dependency ranks.
 */
export default (id = false, options) =>

  new Promise((resolve, reject) => {

    if (cache.globalFiles === global.FILES
        && cache.motifs)
        
      resolve(cache.motifs)

    cache.globalFiles = global.FILES

    INSTANCE.get(
      MOTIF,
      {
        format: formatEnum.ESM
      })
      .then(files => {

        Promise.all(
          files.map(({ id, scope }) =>
          
            FILE.get(
              `${ scope }/_motifs/${ id }/description/description.md`,
              { format: formatEnum.UTF_8 }
            )))
          
          .then(descriptions => {
        
            const motifs = files.map((file, index) => {
              
              return {
                ...file,
                description: descriptions[index]
                  ? descriptions[index].content

                  : file.description
              }
            })
              .sort((a, b) => a - b)

            cache.motifs = motifs

            resolve(motifs)
          })
      })
  })