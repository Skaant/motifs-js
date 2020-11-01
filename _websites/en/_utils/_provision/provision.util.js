import MOTIF from "../../../../_shrine/kami/kami.kami.js";

export default () =>

  new Promise(resolve =>
    
    Promise.all([ MOTIF.get() ])
    .then(([ motifs ]) =>
    
      resolve({ motifs })))