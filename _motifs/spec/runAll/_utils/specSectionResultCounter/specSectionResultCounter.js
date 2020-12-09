/**
 * 
 * @param {SPEC-SECTION} section 
 * @returns {[count: number, total: number]} 
 */
function recursiveCounter(section) {
  const result = section.result
  if (typeof result === 'boolean') {
    return [ Number(result), 1 ]
  } else {
    return result.reduce(
      (acc, section) => {
        const [ count, total ] = recursiveCounter(section)
        return [
          acc[0] + count,
          acc[1] + total
        ]
      }, [ 0, 0 ])
  }
}

export default recursiveCounter