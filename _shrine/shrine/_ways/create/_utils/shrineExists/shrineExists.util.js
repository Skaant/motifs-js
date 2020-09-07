import fs from 'fs'

/**
 * Check whether a shrine exists in
 *  given scope or not, and the path checked.
 * 
 * @resolve `(
 *  exists: boolean,
 *  shrinePath: string
 * )` */
export default scope => 

  new Promise(resolve => {

    const shrinePath = global.PATH + '/' + scope + '/_shrine'

    fs.exists(
      shrinePath,
      exists => resolve(exists, shrinePath))
  })