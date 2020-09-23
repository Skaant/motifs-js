import { promises as fs } from 'fs'

export default (src, dest, options) =>

  fs.copyFile(
    global.PATH + src,
    global.PATH + dest
  )