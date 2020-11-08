import getPathUtil from './_utils/getPath/getPath.util.js'
import getFilesUtil from './_utils/getFiles/getFiles.util.js'
import getPantheonScopeUtil from './_utils/getPantheonScope/getPantheonScope.util.js'

/** **AVE rises THE FIRST MOTIF OF ALL.**
 * 
 * It's the `motifs` framework's
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
  global.PATH = getPathUtil(url)
  
  log && console.log('* global.PATH : ' 
    + global.PATH)

  /** 2. global.FILES */
  global.FILES = getFilesUtil('')

  log && console.log('* global.FILES : '
    + global.FILES.length + ' found.')

  /** 3. global.PANTHEON */
  global.PANTHEON_SCOPE = getPantheonScopeUtil(
    global.PATH,
    global.FILES
  )

  log && console.log('* global.PANTHEON_SCOPE : '
    + global.PANTHEON_SCOPE || 'none (standalone)')

  return true
}