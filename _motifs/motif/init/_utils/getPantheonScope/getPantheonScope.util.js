/** Detects if the project is ran as
 * a standalone, otherwise calculates the
 * `kamis.js` module scope. */
export default (globalPath, globalFiles) => {

  if (globalPath.search(/motifs\-js$/) > -1)
    
    return false

  const pantheonFolder = globalFiles.find(filePath =>
        
    filePath.search(/(?<!\.)motifs-js$/) > -1)

  if (!pantheonFolder)

    throw new Error('PANTHEON_NOT_FOUND')

  return (pantheonFolder.match(/(.*)motifs-js/)[1]
    + 'motifs')
}