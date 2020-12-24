import {
  promises as fs,
  constants as fsConstants } from 'fs'

export default (src, dest, options) =>

  fs.copyFile(
    global.PATH + src,
    global.PATH + dest
  )