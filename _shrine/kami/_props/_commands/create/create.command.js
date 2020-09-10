import KAMI from "../../../kami.kami.js"

export default (options, scope, id) =>

  new Promise(resolve => {

    KAMI.create(scope, id).then(resolve)
  })