import FOLDER from '../../../folder/folder.kami.js'

/** SHRINE CREATE WAY */
export default (scope, callback) => 

  new Promise(resolve => {

    FOLDER.create(
      scope,
      '_shrine',
      callback
    )
      .then(() => resolve())
  })