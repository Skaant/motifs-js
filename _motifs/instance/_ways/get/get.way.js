import formatEnum from '../../../get/_enums/format/format.enum.js'
import FILE from '../../../file/file.motif.js'
import OCCURENCE from '../../../occurence/occurence.motif.js'

/**
 * Retrieves all instances of the given MOTIF,
 *  based on `motif.occurences[{ regExp }]`.
 * 
 * Instances are returned on wether `format`
 *  value is given in the `options` parameter in :
 * 
 * * `FILE_PATH`,
 * * `UTF_8`,
 * * `ESM`.
 * 
 * The `options.scope` property can be use to
 *  restrict the occurence search to only a given
 *  repository sub-directory.
 * 
 * @param {MOTIF} motif The MOTIF to find instances of
 * @param {{format:'<formatEnum>',scope:string}} options
 */
export default (
  motif,
  options = {}
) => 

  new Promise((resolve, reject) => {
    
    const {
      id,
      occurences
    } = motif

    const {
      format = formatEnum.ESM,
      scope = ''
    } = options

    /** @var { [ filePath ] | [ fileMeta ] }
     *  * `filePath` if `format === formatEnum.FILE_PATH`,
     *  * `fileMeta` (`occurences`'s `transform` result) else.*/
    Promise.all(occurences.map(occurence => OCCURENCE.get(occurence)))
      .then(result => {

        /** In fact they are `fileTransforms` */
        const files = result.reduce(
          (acc, transforms) => acc.concat(transforms), 
          [])

        switch (format) {
  
          case formatEnum.FILE_PATH:

            resolve(files.map(file => file.path))

          case formatEnum.TRANSFORM:

            resolve(files)

            break

          case formatEnum.UTF_8:

            Promise.all(files.map(fileMeta => FILE.get(
              fileMeta.path,
              { format })))

              .then(contents => resolve(
                contents.map((content, index) => ({
                  ...files[index],
                  content
                }))))

            break
          
          case formatEnum.ESM:

            Promise.all(files.map(fileMeta =>
              
              FILE.get(
                fileMeta.path,
                { format })))

                .then(instances =>
                  
                  resolve(instances.map((instance, index) => ({
                    motif: id,
                    ...files[index],
                    ...instance
                  }))))

            break

          default:

            reject(new Error('No options.mode "'
              + options.mode + '"'))
        }
      })
  })