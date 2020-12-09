import namesProp from './_props/names/names.prop.js'
import occurencesEnum from './_enums/occurences/spec.occurences.enum.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'
import FILE from '../file/file.motif.js'
import formatEnum from '../get/_enums/format/format.enum.js'
import runOne from './runOne/runOne.js'
import runAll from './runAll/runAll.js'

export default {
  id: 'spec',
  symbol: 'Ѭ',
  names: namesProp,
  runOne,
  runAll,
  occurences: [
    /** Individual "BLIND" tests */
    {
      type: occurencesEnum.BLIND,
      level: occurenceLevelEnum.FILE,
      fileMatch: /(.*)\/([\w|\-]*)\/([\w|\-]*)\.specxo.js/,
      transform: ([ path, scope, folder, id ]) => ({ path, scope, folder, id }),
      provision: occurence => new Promise(resolve =>
        FILE.get(path, { format: formatEnum.ESM })
          .then(content => resolve({ occurence, content })))
    },
    /** MOTIFS' INSTANCES replicable tests */
    /* {
      type: occurencesEnum.INSTANCES,
      regExp: /(.*)\/([\w|\-]*)\/_props\/specs\/([\w|\-]*)\/([\w|\-]*).spec.js/,
      transform: ([ _, scope, motif, folder, id ]) => ({
        scope,
        motif,
        folder,
        id
      })
    } *,
    /** @todo Move to BLIND
      regExp: /(.*)\/(.*)\/_props\/_specs\/(.*)\/(.*).spec.js/ */
  ]
}