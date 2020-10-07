import recursiveCopyUtil from './_utils/recursiveCopy/recursiveCopy.util.js'

/** Recursively copy src folder content
 *  to the dest folder.
 */
export default (src, dest, options) =>

  recursiveCopyUtil(src, '', dest, options)