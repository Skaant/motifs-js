import runOneErrors from "./runOne.errors.js"

async function exploreSection(section, options) {

  options.log && console.log(section.label)

  if (section.group) {

    const result = Promise.all(
      section.group.map(item => exploreSection(item, options)))
    return result

  } else if (section.test) {

    const ranTest = section.test()
    if (ranTest.constructor.name === 'Promise') {

      const result = await ranTest
      options.log && console.log(' => ' + result)
      return result
    }
    options.log && console.log(' => ' + ranTest)
    return ranTest

  } else {

    throw new Error(runOneErrors.NEITHER_GROUP_OR_TEST)
  }
}

export default exploreSection