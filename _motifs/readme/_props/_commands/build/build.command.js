import README from '../../../readme.motif.js'

export default options =>

  new Promise(resolve =>
    
    README.build(options).then(resolve))