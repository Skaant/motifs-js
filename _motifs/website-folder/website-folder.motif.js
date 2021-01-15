import { EN, FR } from '../lang/_enums/lang.enum.js'
import build from './build/build.js'
import shape from './shape/shape.js'

export default {
  id: 'website-folder',
  names: {
    [EN]: 'Website folder',
    [FR]: 'Dossier de site'
  },
  shape,
  build
}