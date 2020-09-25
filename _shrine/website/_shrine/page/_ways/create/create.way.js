import FILE from '../../../../../file/file.kami.js'

export default (template, data, scope, options) =>

  new Promise(resolve =>
    
    FILE.create(
      scope,
      'index.html',
      folderScope => template(data),
      options
    )
      .then(resolve))