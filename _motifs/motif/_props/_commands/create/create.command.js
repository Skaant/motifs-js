import MOTIF from "../../../motif.motif.js"

export default ([ id, scope ], options) =>

  new Promise(resolve => {

    const _scope = scope ? (scope + '/') : ''

    MOTIF.create(id, _scope, options)
      .then(() => {

        console.log('MOTIF "'
          + id + '" created at scope "'
          + (_scope  + '".'))
        
        resolve()
      })
  })