import {
  promises as fs,
  constants as fsConstants } from 'fs'

export default (src, dest, options) =>

  fs.copyFile(
    global.PATH + src,
    global.PATH + dest,
    /* options && options.force
      ?  */ fsConstants.COPYFILE_FICLONE_FORCE /*

      : fsConstants.COPYFILE_EXCL */
  )