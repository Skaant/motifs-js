/**
 * Check if the `folderMatch` RegExp ends with a "$",
 *  otherwise adds it.
 * 
 * @param {RegExp} folderMatch
 * @returns {RegExp} "$"-suffixed `folderMatch` RegExp
 */
export default folderMatch => {

  const stringFolderMatch = folderMatch.toString()
  const fitStringFolderMatch = stringFolderMatch.slice(1, stringFolderMatch.length - 1)

  return fitStringFolderMatch.endsWith('$')
    ? folderMatch

    : new RegExp(fitStringFolderMatch + '$')
}