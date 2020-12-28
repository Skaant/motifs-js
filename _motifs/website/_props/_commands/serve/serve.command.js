import express from 'express'
import fs from 'fs'

export default ([ id ], options) => {

  const app = express()
  const port = 3000
  const staticFolder = `${
      global.FRAMEWORK_PATH ? '.' : '.'
    }/_build/${ id }`

  app.use('/', express.static(staticFolder))

  options.log && console.log('Static folder set to "'
    + staticFolder + '".')
    
  app.listen(
    port,
    () => console.log(`WEBSITE ${ id } listening at http://localhost:${ port }`))
}