import FILE from '../../../../_shrine/file/file.kami.js'

export default (template, data, scope, options) =>

  new Promise(resolve =>
    
    FILE.create(
      scope,
      'index.html',
      folderScope => template(data),
      options
    )
      .then(resolve))