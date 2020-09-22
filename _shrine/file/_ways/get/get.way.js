import { promises as fs } from 'fs'
import formatEnum from "./_enums/format/format.enum.js";

/**
 * @param {{format:'<formatEnum>'}} options
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

    const filesPath = global.FILES.filter(filePath =>
      filePath.match(regExp))

    switch (options.format) {

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
                    || false,
                  kami: id,
                  filePath: filesPath[index],
                  ...fileContent
                }
              })))

        break

      default:

        reject(new Error('No options.mode "'
          + options.mode + '"'))
    }
  })