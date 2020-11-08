import README from '../../../readme.motif.js'

export default (_, options) =>

  new Promise(resolve =>
    
    README.build(options).then(resolve))