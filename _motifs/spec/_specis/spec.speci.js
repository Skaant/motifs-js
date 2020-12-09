/** Recursively check the format of SPEC-SECTION.
 * 
 * Returns an array of SPEC-SECTION results */
function recursiveFormatCheck(section) {
  if (section.group) {
    return {
      result: section.group.every(_section =>
        recursiveFormatCheck(_section).result)
    }
  } else if (section.test) {
    return {
      result: typeof section.test === 'function'
    }
  } else {
    return { result: false }
  }
}

export default {
  label: 'INSTANCES : SPEC',
  group: [
    {
      label: 'FORMAT : SPEC-SECTION',
      test: instance => recursiveFormatCheck(instance)
    }
  ]
}