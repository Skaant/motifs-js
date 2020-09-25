import recursiveCopyUtil from './_utils/recursiveCopy/recursiveCopy.util.js'

export default (src, dest, options) =>

  recursiveCopyUtil(src, '', dest, options)