import getPantheonScopeUtil from "./getPantheonScope.util.js";

export default () =>

  new Promise(resolve => {
    
    const standalone = getPantheonScopeUtil('C://dev/kami.js')
    
    const integration = getPantheonScopeUtil(
      'C://dev/projet',
      [ 'kami.js',
        'kami.js/_shrine/kami/kami.kami.js' ]
    )

    const extreme = getPantheonScopeUtil(
      'C://dev/projet',
      [ 'exemple/temp/kami.js/_shrine/kami/kami.kami.js',
        'exemple/temp/kami.js' ])
    
    resolve([
      [
        standalone === false,
        "Should return false while being run in a standalone project."
      ],
      [
        integration === 'kami.js',
        'Should return "" while being run at the root of a consuming project.'
      ],
      [
        extreme === 'exemple/temp/kami.js',
        'Should return the path between the root folder and the `kami.js` folder.' ]
    ])
  })