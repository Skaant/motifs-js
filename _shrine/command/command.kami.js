import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'command',
  names: namesProp,
  description: descriptionProp,
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