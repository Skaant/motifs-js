import formatEnum from "../../get/_enums/format/format.enum.js"
import INSTANCE from "../../instance/instance.motif.js"
import MOTIF from "../../motif/motif.motif.js"
import specOccurencesEnum from "../_enums/_occurences/spec.occurences.enum.js"
import runOneErrors from "./runOne.errors.js"

async function exploreSection(section, options) {

  options.log && console.log(section.label)

  if (section.group) {

    const result = await Promise.all(
      section.group.map(item => exploreSection(item, options)))
    return { label: section.label, result }

  } else if (section.test) {

    const ranTest = options.instances
      ? options.instances.map(instance =>
        section.test(instance))
      : section.test()
    if (ranTest.constructor.name === 'Promise') {

      const result = await ranTest
      options.log && console.log(' => ' + result)
      return { label: section.label, result }

    } else {
      
      options.log && console.log(' => ' + (
        typeof ranTest === 'boolean'
          ? ranTest
          : ranTest.map(({ result }) => result).join(', ')))
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
export default async (spec, options) => {
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