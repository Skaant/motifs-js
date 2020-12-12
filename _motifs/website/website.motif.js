import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import buildWay from './_ways/build/build.way.js'
import _commands from './_props/_commands/index.js'
import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'

export default {
  id: 'website',
  symbol: 'Ʋ',
  names: namesProp,
  occurences: [
    {
      level: occurenceLevelEnum.FILE,
      fileMatch: /^\/_websites\/(.*)\/(.*).website.js/,
      transform: ([ path, folder, id ]) => ({ path, folder, id })
    }
  ],
  description: descriptionProp,
  build: buildWay,
  _commands
}