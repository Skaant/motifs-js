import express from 'express'
import fs from 'fs'

export default ([ id ], options) => {

  const app = express()
  const port = 3000

  app.use(
    '/',
    express.static(`${
      global.FRAMEWORK_PATH ? '..' : '.'
    }/_build/${ id }`))
    
  app.listen(
    port,
    () => console.log(`WEBSITE ${ id } listening at http://localhost:${ port }`))
}