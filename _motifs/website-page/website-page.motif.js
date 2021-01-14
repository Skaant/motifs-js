import { EN, FR } from 'motifs-js/_motifs/lang/_enums/lang.enum.js'
import describe from './describe/describe.js'
import build from './build/build.js'
import create from './create/create.js'

export default {
  id: 'website-page',
  names: {
    [EN]: 'Page de site',
    [FR]: 'Website page'
  },
  describe,
  build,
  create
}