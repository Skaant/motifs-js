import motifJs from './index.js'
import MOTIF from './_motifs/motif/motif.motif.js'
import { FEATURE, MODULE } from './_motifs/spec-section/_enums/type/spec-section.type.enum.js'
import * as globalNamesEnum from './_motifs/global/_enums/names/global.names.enum.js'

export default {
  type: MODULE,
  target: motifJs,
  group: [
    {
      /**
       * Understand that in order for `init.spec` to run,
       *  the framework should have already been initialized.
       * 
       * In consequence, the tests will be run against
       *  the actual application `global` variable.
       */
      type: FEATURE,
      label: 'Initializes `global` state',
      group: Object.keys(globalNamesEnum).map(key => ({
        type: FEATURE,
        label: `\`global.\`${ key } should be set.`,
        test: () => !!global[key] || key === globalNamesEnum.PROJECT_PATH
      }))
    },
    {
      type: FEATURE,
      label: 'Returns MOTIF `MOTIF`',
      test: () => MOTIF
        === motifJs('file:///' + global.PROJECT_PATH + '/index.js', {})
    }
  ]
}