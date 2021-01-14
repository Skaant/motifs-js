import pug from 'pug'
import fs from 'fs'
import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import { TEMPLATE_FILE_NOT_FOUND, TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION, TEMPLATE_IS_NOT_A_PUG_FILE } from 'motifs-js/_motifs/website-page/describe/_errors/describe.errors.js'

/**
 * @param {Function|string} template
 *  When a `string` is given, expect a
 *  path to a `pug` template.
 */
export default (template, data) => {
  let _template
  if (typeof template === 'function') {
    _template = template
  } else if (typeof template === 'string') {
    if (!template.endsWith('.pug'))
      throw new Error(TEMPLATE_IS_NOT_A_PUG_FILE)
    try {
      fs.statSync(template)
      _template = pug.compileFile(template)
    } catch {
      throw new Error(TEMPLATE_FILE_NOT_FOUND)
    }
  } else {
    throw new Error(TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION)
  }
  return {
    motif: websitePageMotif.id,
    template: _template,
    data
  }
}