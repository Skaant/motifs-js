import formatEnum from "../../../../_motifs/get/_enums/format/format.enum.js";
import INSTANCE from "../../../../_motifs/instance/instance.motif.js";
import MOTIF from "../../../../_motifs/motif/motif.motif.js";

export default () =>

  new Promise(resolve =>
    
    MOTIF.get()
      .then(motifs =>

        Promise.all(
          motifs.map(motif =>

            INSTANCE.get(
              motif,
              {
                format: formatEnum.TRANSFORM
              })))
        
          .then(motifsInstances =>

            resolve({
              motifs: motifs.map((motif, index) => ({
                ...motif,
                _instances: motifsInstances[index]
              }))
            }))))