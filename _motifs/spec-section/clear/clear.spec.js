import folderMotif from "../../folder/folder.motif.js";
import { FEATURE, MODULE } from "../_enums/type/spec-section.type.enum.js";
import clear from './clear.js'
import sinon from 'sinon'

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'When `path` targets a directory, '
        + 'call FOLDER `clear` method on it.',
      test: async () => {
        const folderPath = '_tests/spec-section--clear-call-folder'
        await folderMotif.create(folderPath)
        const spy = sinon.spy(folderMotif, 'clear')
        await clear(folderPath)
        return spy.calledOnceWith(folderPath)
      }
    }
  ]
}