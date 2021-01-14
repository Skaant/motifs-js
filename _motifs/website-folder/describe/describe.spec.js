import { FEATURE, MODULE } from "motifs-js/_motifs/spec-section/_enums/type/spec-section.type.enum.js";
import websiteFolderMotif from "motifs-js/_motifs/website-folder/website-folder.motif.js";

export default {
  type: MODULE,
  group: [{
    type: FEATURE,
    label: 'Returns a new object.',
    group: [
      {
        type: FEATURE,
        label: 'Object has WEBSITE_FOLDER id as `motif` property.',
        test: () =>
          websiteFolderMotif.describe({}).id
            === websiteFolderMotif.id
      },
      {
        type: FEATURE,
        label: 'Object has the same properties than the `content` parameter.',
        test: () => {
          const content = {
            1: 'temp',
            2: 'troiz'
          }
          const result = websiteFolderMotif.describe(content)
          return Object.entries(content)
            .every(([ key, value ]) =>
              result[key] === value)
        }
      }
    ]
  }]
}