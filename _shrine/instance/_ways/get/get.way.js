import formatEnum from '../../../../_motifs/get/_enums/format/format.enum.js'
import FILE from '../../../../_motifs/file/file.motif.js'

/**
 * Retrieves all instances of the given KAMI,
 *  based on `kami.regExp`.
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
 * @param {KAMI} kami The KAMI to find instances of
 * @param {{format:'<formatEnum>',scope:string}} options
 */
export default (
  kami,
  options = {}
) => 

  new Promise((resolve, reject) => {
    
    const {
      id,
      /** @deprecated */
      regExp,
      occurences
    } = kami

    const {
      format = formatEnum.ESM,
      scope = ''
    } = options

    /** @var { [ filePath ] | [ fileMeta ] }
     *  * `filePath` if `format === formatEnum.FILE_PATH`,
     *  * `fileMeta` (`occurences`'s `transform` result) else.*/
    const files = (occurences
      ? occurences.reduce(
        (acc, { regExp, transform }) => acc.concat(
          format === formatEnum.FILE_PATH
            ? global.FILES.filter(filePath =>
                
              filePath.match(new RegExp('^' + scope + '/'))
                && filePath.match(regExp))
            
            : global.FILES.reduce(
              (acc, filePath) => 
                
                (filePath.match(new RegExp('^' + scope + '/'))
                    && filePath.match(regExp))
                  ? [
                    ...acc,
                    {
                      filePath,
                      ...transform(filePath.match(regExp))
                    }
                  ]
                  
                  : acc,
              [])
        ),
        []
      )

      : [])

    switch (format) {

      case formatEnum.FILE_PATH:
      case formatEnum.TRANSFORM:

        resolve(files)

        break

      case formatEnum.UTF_8:

        Promise.all(files.map(fileMeta => FILE.get(
          fileMeta.filePath,
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
            fileMeta.filePath,
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