import MOTIF from "../../../motif.motif.js"

export default ([ id = false ], options) =>

  new Promise(resolve => {

    MOTIF.test(id, options.log, options.doc)
      .then(resolve)
  })