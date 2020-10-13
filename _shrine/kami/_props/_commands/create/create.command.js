import KAMI from "../../../kami.kami.js"

export default (options, scope, id) =>

  new Promise(resolve => {

    KAMI.create(scope, id, options)
      .then(() => {

        console.log('KAMI "'
          + id + '" created at scope "'
          + scope + '".')
        
        resolve()
      })
  })