import MOTIF from '../../_motifs/motif/motif.motif.js'

export default () =>

  new Promise(resolve =>

    MOTIF.get()
      .then(motifs =>

        resolve({ motifs })))