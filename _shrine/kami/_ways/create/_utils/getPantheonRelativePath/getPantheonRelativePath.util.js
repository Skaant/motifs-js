/** From a target scope,
 *  calculates the PANTHEON path :
 *  the path to the base SHRINE.
 * 
 * Cases :
 * * 1. Standalone `kami.js`, **inside top-shrine**,
 * * 1. ..., **outside top-shrine** (ex: _tests),
 * * 1. Custom project consumming `kami.js`. 
 * 
 * @param {false|string} pantheonScope
 * @param {string} currentScope
 */
export default (pantheonScope, currentScope) => {

  const splitScope = currentScope.split('/')

  return splitScope.slice(
      currentScope[0] === '/' ? 1 : 0)
    .map(() => '../')
    .join('')

    + (pantheonScope
      ? (pantheonScope + '/')
      
      : '')
}