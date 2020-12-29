import folderMotif from "../../../../folder/folder.motif.js";
import { NODE_MODULE, STANDALONE } from "../../../../global/_enums/frameworkPath/frameworkPath.enum.js";
import { CASE, FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import { NODE_MODULE_NOT_FOUND } from "./getFrameworkPath.errors.js";
import getFrameworkPath from "./getFrameworkPath.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'If project path points to a `motifs-js` folder, '
        + 'should return `frameworkPathEnum.STANDALONE`.',
      test: () => STANDALONE
        === getFrameworkPath('C://dev/motifs-js') 
    },
    {
      type: FEATURE,
      label: 'If project path points to a something else than `motifs-js` folder, '
        + '**and /node_modules/motifs-js exists**, '
        + 'returns `frameworkPathEnum.NODE_MODULE`.',
      test: () => new Promise(resolve =>
        folderMotif.create(
          '_tests',
          'node_modules',
          folderScope => [
            folderMotif.create(
              folderScope,
              'motifs-js',
              () => []
            )
          ]
        )
          .then(() => resolve(NODE_MODULE
            === getFrameworkPath(global.PATH + '/_tests'))))
    },
    {
      type: FEATURE,
      label: 'Project path ends with a `something-else`, '
        + 'should throw a `getFrameworkPathErrors.NODE_MODULES_NOT_FOUND`.',
      test: () => {
        try {
          getFrameworkPath('C://dev/something-else')
          return false
        } catch (err) {
          return err.message === NODE_MODULE_NOT_FOUND
        }
      }
    }
  ]
}

/* () =>

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
  }) */