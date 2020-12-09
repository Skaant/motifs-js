import specSectionResultCounter from './specSectionResultCounter.js'

function test(section, _count, _total) {
  const [ count, total ] = specSectionResultCounter(section)
  return count === _count && total === _total
}

export default {
  label: 'FEATURE: Returns sum for nested ran SPEC-SECTION',
  group: [
    {
      label: 'CASE: 0-level nesting, `result: true`',
      test: () => test({ result: true }, 1, 1)
    },
    {
      label: 'CASE: 0-level nesting, `result: false`',
      test: () => test({ result: false }, 0, 1)
    },
    {
      label: 'CASE: 1-levels nesting, 2 `true` / 1 `false`',
      test: () => test({
        result: [{
          result: true
        }, {
          result: false
        }, {
          result: true
        }]
      }, 2, 3)
    },
    {
      label: 'CASE: 2-levels nesting, 2 `true` / 1 `false`',
      test: () => test({
        result: [{
          result: [{
            result: true
          }]
        }, {
          result: [{
            result: [{
              result: false
            }, {
              result: true
            }]
          }]
        }]
      }, 2, 3)
    }
  ]
}