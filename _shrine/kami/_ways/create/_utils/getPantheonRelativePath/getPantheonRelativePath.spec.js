import getPantheonRelativePathUtil from "./getPantheonRelativePath.util.js";

const _standalone = '/_shrine/custom/_props/names'
const _standaloneNested = '/_shrine/custom/_shrine/sub/_props/names'
const _standaloneExt = '/temp/_shrine/custom/_props/names'
const _integration = '/_shrine/custom/_props/names'
const _integrationExt = '/temp/_shrine/custom/_props/names'
const _noStartingDash = 'temp/_shrine/custom/_props/names'

export default () =>

  new Promise(resolve => {

    const standalone = getPantheonRelativePathUtil(
      false,
      _standalone
    )
    
    const standaloneNested = getPantheonRelativePathUtil(
      false,
      _standaloneNested
    )

    const standaloneExt = getPantheonRelativePathUtil(
      false,
      _standaloneExt
    )
    
    const integration = getPantheonRelativePathUtil(
      'kami.js',
      _integration
    )
    
    const integrationExt = getPantheonRelativePathUtil(
      'kami.js',
      _integrationExt
    )

    const noStartingDash = getPantheonRelativePathUtil(
      false,
      _noStartingDash
    )

    /** @todo When switching to node_modules */
    
    resolve([
      [
        standalone === '../../../../',
        'Should return 4 ../.\n'
          + 'Given : ' + _standalone + '\n'
          + 'Returned : ' + standalone
      ],
      [
        standaloneNested === '../../../../../../',
        'Should return 6 ../.\n'
          + 'Given : ' + _standaloneNested + '\n'
          + 'Returned : ' + standaloneNested
      ],
      [
        standaloneExt === '../../../../../',
        'Should return 5 ../.\n'
          + 'Given : ' + _standaloneExt + '\n'
          + 'Returned : ' + standaloneExt
      ],
      [
        integration === '../../../../kami.js/',
        'Should return 4 ../ + kami.js.\n'
          + 'Given : ' + _integration + '\n'
          + 'Returned : ' + integration
      ],
      [
        integrationExt === '../../../../../kami.js/',
        'Should return 5 ../ + kami.js.\n'
          + 'Given : ' + _integrationExt + '\n'
          + 'Returned : ' + integrationExt
      ],
      [
        noStartingDash === '../../../../../',
        'Should return 5 ../.\n'
          + 'Given : ' + _integrationExt + '\n'
          + 'Returned : ' + integrationExt
      ]
    ])
  })