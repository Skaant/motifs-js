import formatEnum from "../../get/_enums/format/format.enum.js"
import INSTANCE from "../../instance/instance.motif.js"
import MOTIF from "../../motif/motif.motif.js"
import specOccurencesEnum from "../../spec/_enums/_occurences/spec.occurences.enum.js"
import resolveRecursively from "./_utils/resolveRecursively/resolveRecursively.js"

/** 
 * @param {SPEC} spec Accepts :
 *  * UNIT SPEC OCCURENCE (`.spec.js`),
 *  * INSTANCE SPEC OCCURENCE (`.speci.js`).
 */
export default async (spec, options = {}) => {
  if (spec.type === specOccurencesEnum.INSTANCE) {
    options.motif = (await MOTIF.get())
      .find(motif => motif.id === spec.motif)
    options.instances = await INSTANCE.get(
      options.motif,
      { format: formatEnum.ESM })
  }
  const result = await resolveRecursively(spec, options)
  return { path: spec.path, result }
}