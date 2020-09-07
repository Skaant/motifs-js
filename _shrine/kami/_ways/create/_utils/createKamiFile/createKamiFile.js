import fs from 'fs'

export default (scope, id) =>

  new Promise((resolve, reject) => {

    const kamiFilePath = global.PATH
      + '/' + scope + '/_shrine/' + id
      + '/' + id + '.kami.js'

    fs.exists(
      kamiFilePath,
      exists => exists
        ? resolve()
        : fs.writeFile(
          kamiFilePath,
`import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";

export default {
  id: '${ id }',
  names: namesProp,
  description: descriptionProp
}`,
          err => err ? reject(err) : resolve()
        ))
  })