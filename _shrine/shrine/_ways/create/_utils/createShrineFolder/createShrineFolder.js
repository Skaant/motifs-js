import fs from 'fs'

export default shrinePath =>

  new Promise((resolve, reject) => {

    fs.mkdir(
      shrinePath,
      err => err ? reject(err) : resolve()
    )
  })