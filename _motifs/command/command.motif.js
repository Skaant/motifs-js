import occurenceLevelEnum from '../occurence/_enums/level/occurence.level.enum.js'
import namesProp from './_props/names/names.prop.js'

export default {
  id: 'command',
  symbol: '⌿',
  names: namesProp,
  occurences: [{
    level: occurenceLevelEnum.FILE,
    fileMatch: /(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/,
    transform: ([ _, scope, motif, folderName, fileName ]) => ({
      id: `${ motif }-${ fileName }`,
      scope,
      motif,
      folderName,
      fileName
    })
  }]
}