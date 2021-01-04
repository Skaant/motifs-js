import { FILES, FRAMEWORK_PATH, OPTIONS, PROJECT_PATH } from '../../global/_enums/names/global.names.enum.js'
import getProjectPath from './_utils/getProjectPath/getProjectPath.js'
import getFiles from './_utils/getFiles/getFiles.js'
import getFrameworkPath from './_utils/getFrameworkPath/getFrameworkPath.js'
import exclusionRules from './exclusionRules.js'

function logValue(key) {
  global[OPTIONS].log
    && console.log(`* global.${ key } : ${
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
  log && console.log('* global.OPTIONS : \n'
    + Object.entries(options)
      .map(([ key, value ]) => ` * ${ key } : ${ value }`))

  global[PROJECT_PATH] = getProjectPath(url)
  logValue(PROJECT_PATH)

  global[FILES] = getFiles('', exclusionRules)
  log && console.log('* global.FILES : ' + global.FILES.length + ' found')

  global[FRAMEWORK_PATH] = getFrameworkPath(global[PROJECT_PATH])
  logValue(FRAMEWORK_PATH)

  return true
}