import { promises as fs } from 'fs'
import FILE from '../../../file/file.motif.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'
import langEnum from '../../../lang/_enums/lang.enum.js'
import createWay from "./create.way.js"

export default () =>

  new Promise(resolve =>

    createWay(
      '_tests',
      'temp'
    )

      .then(() => 

        Promise.all([
          fs.access(
            global.PATH
              + '/_tests/_motifs'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/motif/motif.motif.js'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp/_props'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp/_props/names'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp/_props/names/names.prop.js'
          ),
          FILE.get(
            '/_tests/_motifs/temp/_props/names/names.prop.js',
            {
              format: formatEnum.ESM
            }
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp/_props/description'
          ),
          fs.access(
            global.PATH
              + '/_tests/_motifs/temp/_props/description/description.prop.js'
          )
        ])
          
          .then(([
            shrineFolder,
            motifFolder,
            motifFile,
            propsFolder,
            namesFolder,
            namesFile,
            openedNamesFile,
            descriptionFolder,
            descriptionFile
          ]) => {
            
            return resolve([

              [
                shrineFolder,
                'Should create a SHRINE at scope location, if none.' ],
              [
                motifFolder,
                'Should create a MOTIF root folder, with given id.' ],
              [
                motifFile,
                'Should create a ".motif.js" file in MOTIF root folder, with given id.' ],
              [
                propsFolder,
                'Should create a "_props" folder in MOTIF root folder.' ],
              [
                namesFolder,
                'Should create a "_props/names" folder.' ],
              [
                namesFile,
                'Should create a "_props/names/names.prop.js" file.' ],
              [
                openedNamesFile[langEnum.ABS],
                'Should create a "".' ],
              [
                descriptionFolder,
                'Should create a "_props/description" folder.' ],
              [
                descriptionFile,
                'Should create a "_props/description/description.prop.js" file.' ]
            ])
          })
          
        .catch(a => console.error(a))))