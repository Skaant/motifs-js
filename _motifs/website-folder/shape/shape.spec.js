import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import websiteFolderMotif from "../website-folder.motif.js";
import shape from './shape.js'

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
          shape({}).motif
            === websiteFolderMotif.id
      },
      {
        type: FEATURE,
        label: 'Object has the same properties as the `content` parameter.',
        test: () => {
          const content = {
            1: 'temp',
            2: 'troiz'
          }
          const result = shape(content)
          return Object.entries(content)
            .every(([ key, value ]) =>
              result[key] === value)
        }
      }
    ]
  }]
}