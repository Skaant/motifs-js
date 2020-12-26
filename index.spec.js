import motifJs from './index.js'
import MOTIF from './_motifs/motif/motif.motif.js'
import { FEATURE, MODULE } from './_motifs/spec-section/_enums/type/spec-section.type.enum.js'

export default {
  type: MODULE,
  target: motifJs,
  group: [
    {
      type: FEATURE,
      label: 'Initializes `global` state',
      /** @see init.spec.ts */
      test: () => true
    },
    {
      type: FEATURE,
      label: 'Returns MOTIF `MOTIF`',
      test: () =>
        motifJs(
          'file:///' + global.PATH + '/index.js',
          { log: true }
        ) === MOTIF
      }
  ]
}