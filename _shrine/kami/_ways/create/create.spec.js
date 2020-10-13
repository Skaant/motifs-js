import { promises as fs } from 'fs'
import FILE from '../../../file/file.kami.js'
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
              + '/_tests/_shrine'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/temp.kami.js'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/_props'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/_props/names'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/_props/names/names.prop.js'
          ),
          FILE.get(
            '/_tests/_shrine/temp/_props/names/names.prop.js',
            {
              format: formatEnum.ESM
            }
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/_props/description'
          ),
          fs.access(
            global.PATH
              + '/_tests/_shrine/temp/_props/description/description.prop.js'
          )
        ])
          
          .then(([
            shrineFolder,
            kamiFolder,
            kamiFile,
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
                kamiFolder,
                'Should create a KAMI root folder, with given id.' ],
              [
                kamiFile,
                'Should create a ".kami.js" file in KAMI root folder, with given id.' ],
              [
                propsFolder,
                'Should create a "_props" folder in KAMI root folder.' ],
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