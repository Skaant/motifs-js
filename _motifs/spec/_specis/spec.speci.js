/** Recursively check the format of SPEC-SECTION.
 * 
 * Returns an array of SPEC-SECTION results */
function recursiveFormatCheck(section) {
  if (section.group) {
    return section.group.every(_section =>
      recursiveFormatCheck(_section))
  } else if (section.test) {
    return typeof section.test === 'function'
  } else {
    return false
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