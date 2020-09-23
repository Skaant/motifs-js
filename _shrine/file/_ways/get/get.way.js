import { promises as fs } from 'fs'
import formatEnum from "./_enums/format/format.enum.js";

/**
 * @param {{format:'<formatEnum>',scope:string}} options
 */
export default (
  {
    id,
    regExp,
    regExpMapping
  },
  options
) => 

  new Promise((resolve, reject) => {

    const {
      format,
      scope = ''
    } = options

    const filesPath = global.FILES
      .filter(filePath =>
        
        filePath.match(new RegExp('^' + scope))
          && filePath.match(regExp))

    switch (format) {

      case formatEnum.FILE_PATH:

        resolve(filesPath)

        break

      case formatEnum.UTF_8:

        Promise.all(filesPath.map(filePath =>
          
          fs.readFile(
            global.PATH + filePath,
            'utf-8')))
          .then(filesContent =>
            
            resolve(filesContent.map((fileContent, index) => ({
              filePath: filesPath[index],
              content: fileContent
            }))))

        break
      
      case formatEnum.ESM:

        Promise.all(filesPath.map(filePath =>
          
          import('file:///'
            + (global.PATH + filePath).replace(/\//g,'\\'))))
          .then(filesContent =>
            
            resolve(filesContent
              .map(({ default: fileContent }, index) => {

                const filePath = filesPath[index]

                return {
                  id: fileContent.id
                    || (regExpMapping
                      && regExpMapping(filePath).id)
                    || filePath,
                  kamiId: id,
                  filePath: filePath,
                  ...fileContent
                }
              })))

        break

      default:

        reject(new Error('No options.mode "'
          + options.mode + '"'))
    }
  })