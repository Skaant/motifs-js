import { MODULE } from "../../../_enums/type/spec-section.type.enum.js"
import clear from "../../../clear/clear.js"
import ResolveRecursivelyError from "./_errors/resolveRecursively.errors.js"
import SpecSection from "../../../_models/SpecSection/SpecSection.model.js"

/** Recursively iterates through `SpecSection` `group` to `test`. */
async function resolveRecursively(
  section: SpecSection,
  options: {
    log?: boolean,
    reports?: boolean
    instances?: []
  }) {

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
      const itemResult = await resolveRecursively(item, options)
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

    throw new Error(ResolveRecursivelyError.NEITHER_GROUP_OR_TEST)
  }
}

export default resolveRecursively