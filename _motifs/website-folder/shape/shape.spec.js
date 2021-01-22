import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import websiteFolderMotif from "../website-folder.motif.js";
import shape from './shape.js'

export default {
  type: MODULE,
  group: [
    {
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
          label: 'Object has the same `content` prop than parameter.',
          test: () => {
            const content = {
              1: 'temp',
              2: 'troiz'
            }
            return shape(content).content
              === content
          }
        }
      ]
    }
  ]
}