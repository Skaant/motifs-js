import occurenceLevelEnum from '../_enums/level/occurence.level.enum.js'
import get from './get.js'

export default {
  label: 'FEATURE: Given an occurence rule returns its transformation',
  group: [
    {
      label: 'FEATURE: Occurence has the `FOLDER` type and should '
        + 'return a simple folder occurence transformation',
      group: [
        {
          label: 'CASE: Trying to retrive `/_motifs` folder.',
          test: () => new Promise(resolve =>
            get({
              level: occurenceLevelEnum.FOLDER,
              folderMatch: /_motifs/,
              transform: ([ path ]) => ({ path })
            })
              .then(results =>
                resolve(results.length >= 1)))
        }
      ]
    }
  ]
}