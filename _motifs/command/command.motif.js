import namesProp from './_props/names/names.prop.js'

export default {
  id: 'command',
  symbol: '⌿',
  names: namesProp,
  occurences: [
    {
      regExp: /(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/,
      transform: ([ _, scope, motif, folderName, fileName ]) => ({
        id: `${ motif }-${ fileName }`,
        scope,
        motif,
        folderName,
        fileName
      })
    }
  ]
}