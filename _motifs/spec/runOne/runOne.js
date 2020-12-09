import runOneErrors from "./runOne.errors.js"

async function exploreSection(section, options) {

  options.log && console.log(section.label)

  if (section.group) {

    const result = await Promise.all(
      section.group.map(item => exploreSection(item, options)))
    return { label: section.label, result }

  } else if (section.test) {

    const ranTest = section.test()
    if (ranTest.constructor.name === 'Promise') {

      const result = await ranTest
      options.log && console.log(' => ' + result)
      return { label: section.label, result }

    } else {
      
      options.log && console.log(' => ' + ranTest)
      return { label: section.label, result: ranTest }
    }
  } else {

    throw new Error(runOneErrors.NEITHER_GROUP_OR_TEST)
  }
}

export default async (spec, options) => {
  const result = await exploreSection(spec, options)
  return { path: spec.path, result }
}