import MOTIF from "../../../motif.motif.js"

export default (options, scope, id) =>

  new Promise(resolve => {

    MOTIF.create(scope, id, options)
      .then(() => {

        console.log('MOTIF "'
          + id + '" created at scope "'
          + scope + '".')
        
        resolve()
      })
  })