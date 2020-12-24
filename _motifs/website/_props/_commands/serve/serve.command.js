import express from 'express'

export default ([ id ]) => {

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