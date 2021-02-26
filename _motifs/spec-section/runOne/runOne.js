import formatEnum from "../../get/_enums/format/format.enum.js"
import INSTANCE from "../../instance/instance.motif.js"
import MOTIF from "../../motif/motif.motif.js"
import { MODULE } from "../_enums/type/spec-section.type.enum.js"
import specOccurencesEnum from "../../spec/_enums/_occurences/spec.occurences.enum.js"
import runOneErrors from "./runOne.errors.js"
import clear from "../clear/clear.js"

async function exploreSection(section, options) {

  if (options.log && section.type !== MODULE)
    console.log(section.label)

  /** `section.clear()`, if present,
   *  is ran a first time to prevent previous
   *  crashing test remains. */
  if (section.clear)
    await clear(section.clear)

  if (section.group) {

    const result = []
    for (const item of section.group) {
      const itemResult = await exploreSection(item, options)
      result.push(itemResult)
    }

    /** Second clear before returning.  */
    if (section.clear)
      await clear(section.clear)

    return { label: section.label, result }

  } else if (section.test) {

    const ranTest = options.instances
      ? options.instances.map(instance => ({
        result: section.test(instance)
      }))
      : section.test()
      
    if (ranTest.constructor.name === 'Promise') {

      const result = await ranTest
      options.log && console.log(' => ' + result)

      /** Second clear before returning.  */
      if (section.clear)
        await clear(section.clear)
      return { label: section.label, result }

    } else {
      
      options.log && console.log(' => ' + (
        typeof ranTest === 'boolean'
          ? ranTest
          : ranTest.map(({ result }) => result).join(', ')))

      /** Second clear before returning.  */
      if (section.clear)
        await clear(section.clear)
      return { label: section.label, result: ranTest }
    }
  } else {

    throw new Error(runOneErrors.NEITHER_GROUP_OR_TEST)
  }
}

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
  const result = await exploreSection(spec, options)
  return { path: spec.path, result }
}