import getPathUtil from './_utils/getPath/getPath.util.js'
import getFilesUtil from './_utils/getFiles/getFiles.util.js'
import getPantheonScopeUtil from './_utils/getPantheonScope/getPantheonScope.util.js'
import { FILES, FRAMEWORK_PATH, OPTIONS, PATH } from '../../global/_enums/names/global.names.enum.js'

function logValue(key) {
  global[OPTIONS].log
    && console.log(`* \`global.${ key }\` : ${
      global[key].toString() }`)
}

/** 
 * Initializes `global` object properties
 *  with frameworks (constants &) variables :
 * 
 * * `OPTIONS`, set relevant global options,
 * * `PATH`, computer path to project's root folder,
 * * `FILES`, project's files' path (except some, like `node_modules`),
 * * `FRAMEWORK_PATH`, path to `motifs-js` or `false` if
 *  you're working in the framework directory.
 */
export default (url, options) => {

  const { log } = global[OPTIONS] = options
  logValue(OPTIONS)

  global[PATH] = getPathUtil(url)
  logValue(PATH)

  global[FILES] = getFilesUtil('')
  log && console.log('* `global.FILES` : ' + global.FILES.length + ' found')

  // @todo "PantheonScope" to "FrameworkPath"
  global[FRAMEWORK_PATH] = getPantheonScopeUtil(global[PATH], global[FILES])
  logValue(FRAMEWORK_PATH)

  return true
}