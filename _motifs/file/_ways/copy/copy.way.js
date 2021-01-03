import {
  promises as fs,
  constants as fsConstants } from 'fs'

export default (src, dest, options) =>

  fs.copyFile(
    global.PROJECT_PATH + src,
    global.PROJECT_PATH + dest
  )