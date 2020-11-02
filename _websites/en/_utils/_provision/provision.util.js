import formatEnum from "../../../../_shrine/get/_enums/format/format.enum.js";
import INSTANCE from "../../../../_shrine/instance/instance.kami.js";
import MOTIF from "../../../../_shrine/kami/kami.kami.js";

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