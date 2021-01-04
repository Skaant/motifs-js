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
          test: async () => {

            const results = await get({
              level: occurenceLevelEnum.FILE,
              fileMatch: /_motifs\/motif\/motif\.motif\.js/,
              transform: ([ path ]) => ({ path })
            })
            
            return results.length >= 1
          }
        }
      ]
    }
  ]
}