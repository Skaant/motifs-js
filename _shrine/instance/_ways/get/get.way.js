import formatEnum from '../../../get/_enums/format/format.enum.js'
import FILE from '../../../file/file.kami.js'

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
  options
) => 

  new Promise((resolve, reject) => {
    
    const {
      id,
      regExp,
      regExpMapping
    } = kami

    const {
      format,
      scope = ''
    } = options

    const filesPath = global.FILES
      .filter(filePath =>
        
        filePath.match(new RegExp('^' + scope + '/'))
          && filePath.match(regExp))

    switch (format) {

      case formatEnum.FILE_PATH:

        resolve(filesPath)

        break

      case formatEnum.UTF_8:

        Promise.all(filesPath.map(filePath =>
          
          FILE.get(
            filePath,
            { format })

            .then(resolve)))

        break
      
      case formatEnum.ESM:

        Promise.all(filesPath.map(filePath =>
          
          FILE.get(
            filePath,
            { format })))

            .then(instances =>
              
              resolve(instances.map(instance => ({
                ...instance,
                kamiId: id
              }))))

        break

      default:

        reject(new Error('No options.mode "'
          + options.mode + '"'))
    }
  })