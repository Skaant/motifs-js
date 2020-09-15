import README from '../../../readme.kami.js'

export default options =>

  new Promise(resolve =>
    
    README.build(options).then(resolve))