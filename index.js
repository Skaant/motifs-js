import MOTIF from "./_motifs/motif/motif.motif.js";

export default options => {
  
  MOTIF.init(import.meta.url, options)
  return MOTIF
}