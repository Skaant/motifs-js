import namesProp from './_props/names/names.prop.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'
import runOne from './runOne/runOne.js'
import runAll from './runAll/runAll.js'
import specOccurencesEnum from './_enums/_occurences/spec.occurences.enum.js'

export default {
  id: 'spec',
  symbol: 'Ѭ',
  names: namesProp,
  runOne,
  runAll,
  occurences: [
    /** Individual "BLIND" tests */
    {
      level: occurenceLevelEnum.FILE,
      fileMatch: /(.*)\/([\w|\-]*)\/([\w|\-]*)\.spec.js/,
      transform: ([ path, scope, folder, id ]) => ({
        type: specOccurencesEnum.UNIT,
        path,
        scope,
        folder,
        id
      })
    },
    /** MOTIFS' INSTANCES replicable tests */
    {
      level: occurenceLevelEnum.FILE,
      fileMatch: /(.*)\/_motifs\/([\w|\-]*)\/_specis\/([\w|\-]*)\.speci.js/,
      transform: ([ path, scope, motif, id ]) => ({
        path,
        type: specOccurencesEnum.INSTANCE,
        scope,
        motif,
        id
      })
    },
  ]
}