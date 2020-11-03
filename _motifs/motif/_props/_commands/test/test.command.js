import MOTIF from "../../../motif.motif.js"

export default (options, id = false) =>

  new Promise(resolve => {

    MOTIF.test(id, options.log, options.doc)
      .then(resolve)
  })