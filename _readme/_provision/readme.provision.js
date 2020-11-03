import MOTIF from '../../_shrine/motif/motif.motif.js'

export default () =>

  new Promise(resolve =>

    MOTIF.get()
      .then(motifs =>

        resolve({ motifs })))