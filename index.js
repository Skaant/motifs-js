import MOTIF from "./_motifs/motif/motif.motif.js";

/**
 * Initializes the `motif-js` framework
 *  using `MOTIF.init()`,
 *  then returns the `MOTIF` MOTIF.
 * 
 * @note `motifJs` is the normative name
 *  to manipulate this module.
 *  
 * Ex: `import motifsJs from 'motifs-js'`.
 */
export default (options = {}) => {
  
  MOTIF.init(import.meta.url, options)
  return MOTIF
}