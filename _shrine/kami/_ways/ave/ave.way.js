import getPath from './_utils/getPath/getPath.util.js'
import getFiles from './_utils/getFiles/getFiles.util.js'

/** **AVE rises THE FIRST KAMI OF ALL.**
 * 
 * It's the `kami.js` framework's
 *  initialization method.
 */
export default (url, { log }) => {

  log && console.log(`AVE mortal !

You have summoned me from my potential state.
May you be blessed once again.

Let me initialize myself :
`
    )

  /** 1. global.PATH */
  global.PATH = getPath(url)

  log && console.log('* global.PATH : '
    + global.PATH + ',')

  /** 2. global.FILES */
  global.FILES = getFiles('')

  log && console.log('* global.FILES : '
    + global.FILES.length + ' found.')

  return true
}