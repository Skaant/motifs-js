import fs from 'fs'
import { NODE_MODULES, STANDALONE } from '../../../../global/_enums/frameworkPath/frameworkPath.enum.js'
import { NODE_MODULE_NOT_FOUND } from './getFrameworkPath.errors.js'

/**
 * @param {string} projectPath
 *  Project path from disk
 * @return {STANDALONE|NODE_MODULES}
 */
export default projectPath => {

  // STANDALONE
  if (projectPath.search(/motifs\-js$/) > -1)
    
    return STANDALONE

  // NODE_MODULES
  try {
    
    // Check if the framework's module exists or not
    fs.statSync(projectPath + '/node_modules/motifs-js')
    return NODE_MODULES
  
  } catch (err) {

    throw new Error(NODE_MODULE_NOT_FOUND)
  }
}