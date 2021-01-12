import namesProp from './_props/names/names.prop.js'
import build from './build/build.js'
import _commands from './_props/_commands/index.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'website',
  symbol: 'Ʋ',
  names: namesProp,
  occurences: [
    {
      level: occurenceLevelEnum.FILE,
      fileMatch: /.*\/([\w\-]*)\/([\w\-]*).website.js/,
      transform: ([ path, folder, id ]) => ({ path, folder, id })
    }
  ],
  build,
  _commands
}