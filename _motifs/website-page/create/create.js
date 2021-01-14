import FILE from 'motifs-js/_motifs/file/file.motif.js'

/** @deprecated since `v0.4` */
export default (template, data, scope, options) =>

  new Promise(resolve =>
    
    FILE.create(
      scope,
      'index.html',
      () => template(data),
      options
    )
      .then(resolve))