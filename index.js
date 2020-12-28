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
export default (url, options = {}) => {
  
  MOTIF.init(url, options)
  return MOTIF
}