import MOTIF from "../../../motif.motif.js"

export default ([ id = false ], options) =>

  new Promise(resolve => {

    MOTIF.test(options)
      .then(resolve)
  })