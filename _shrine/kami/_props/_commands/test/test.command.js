import KAMI from "../../../kami.kami.js"

export default (options, id = false) =>

  new Promise(resolve => {

    KAMI.test(id, options.log, options.doc)
      .then(resolve)
  })