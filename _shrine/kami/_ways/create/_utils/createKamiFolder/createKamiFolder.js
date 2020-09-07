import fs from 'fs'

export default (scope, id) =>

  new Promise((resolve, reject) => {

    const kamiFolderPath = global.PATH
      + '/' + scope + '/_shrine/' + id

    fs.exists(
      kamiFolderPath,
      exists => exists
        ? resolve()
        : fs.mkdir(
          kamiFolderPath,
          err => err ? reject(err) : resolve()))
  })