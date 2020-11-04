import formatEnum from '../../../get/_enums/format/format.enum.js'
import SECTION from '../../section.kami.js'
import FILE from '../../../../../../_shrine/file/file.kami.js'

/**
 * Retrieve SECTION ESM modules,
 *  then *provision* it with actual files
 *  in its folder (sub-SECTIONS, PAGES,
 *  EXTRACTS and IMAGES).
 */
export default (scope, options) => 

  new Promise(resolve => {

    const filesPath = global.FILES
      .filter(filePath =>
        
        filePath.match(new RegExp('^'
          + scope + '/_sections/([\\w|-]*)/([\\w|-]*).section.js')))

    Promise.all(filesPath.map(filePath =>
  
      FILE.get(
        filePath,
        {
          format: formatEnum.ESM
        })))

      .then(sections => {

        sections.length > 0
        
          ? Promise.all(sections.map(section =>
          
            SECTION.provision(section, options)))

            .then(sections =>
              
              // Pourquoi resolve pas compatible book provision ?
              resolve(sections))

            .catch(err =>
              
              console.log(err))

          : resolve(false)
      })
  })