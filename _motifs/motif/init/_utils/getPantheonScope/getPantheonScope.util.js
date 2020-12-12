/** Detects if the project is ran as
 * a standalone, otherwise calculates the
 * `kamis.js` module scope. */
export default (globalPath, globalFiles) => {

  if (globalPath.search(/motifs$/) > -1)
    
    return false

  const pantheonFolder = globalFiles.find(filePath =>
        
    filePath.search(/(?<!\.)motifs$/) > -1)

  if (!pantheonFolder)

    throw new Error('PANTHEON_NOT_FOUND')

  return (pantheonFolder.match(/(.*)motifs/)[1]
    + 'motifs')
}