import { promises as fs } from 'fs'
import formatEnum from '../../../get/_enums/format/format.enum.js'

/**
 * Given a **file path**, returns its content in the format
 *  given in the `options` parameter :
 * 
 * * `UTF_8`, returns the content as text,
 * * `ESM`, returns the module object. * 
 * 
 * @param {string} filePath
 * 
 * @param {{format:'<formatEnum>'}} options
 *  Using `format === 'FILE_PATH'` should be avoided
 *  since it would return its exact `filePath` parameter.
 */
export default (
  filePath,
  options
) => 

  new Promise((resolve, reject) => {

    const { format } = options

    switch (format) {

      case formatEnum.FILE_PATH:

        resolve(filePath)

        break

      case formatEnum.UTF_8:

        filePath =>
          
          fs.readFile(
            global.PATH + filePath,
            'utf-8')

          .then(content =>
            
            resolve({
              filePath,
              content
            }))

        break
      
      case formatEnum.ESM:

        import('file:///'
          + (global.PATH + filePath).replace(/\//g,'\\'))
          
          .then(({ default: content }) =>
            
            resolve({
              id: content.id,
              filePath,
              ...content
            }))

        break

      case formatEnum.FUNCTION:

        import('file:///'
          + (global.PATH + filePath).replace(/\//g,'\\'))
          
          .then(({ default: content }) =>
            
            resolve(content))

        break

      default:

        reject(new Error('No options.mode "'
          + options.mode + '"'))
    }
  })