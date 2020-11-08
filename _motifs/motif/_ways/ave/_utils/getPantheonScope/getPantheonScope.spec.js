import getPantheonScopeUtil from "./getPantheonScope.util.js";

export default () =>

  new Promise(resolve => {
    
    const standalone = getPantheonScopeUtil(
      'C://dev/motifs',
      []
    )
    
    const integration = getPantheonScopeUtil(
      'C://dev/projet',
      [ 'motifs',
        'motifs/_motifs/motif/motif.motif.js' ]
    )

    const extreme = getPantheonScopeUtil(
      'C://dev/projet',
      [ 'exemple/temp/motifs/_motifs/motif/motif.motif.js',
        'exemple/temp/motifs' ])
    
    resolve([
      [
        standalone === false,
        "Should return false while being run in a standalone project."
      ],
      [
        integration === 'motifs',
        'Should return "" while being run at the root of a consuming project.'
      ],
      [
        extreme === 'exemple/temp/motifs',
        'Should return the path between the root folder and the `motifs` folder.' ]
    ])
  })