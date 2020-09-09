import README from '../../../readme.kami.js'

export default () =>

  new Promise(resolve =>
    
    README.build().then(resolve))