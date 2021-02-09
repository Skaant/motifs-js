import FOLDER from '../../folder/folder.motif.js'
import FILE from '../../file/file.motif.js'
import { FRAMEWORK_PATH } from '../../global/_enums/names/global.names.enum.js'
import { NODE_MODULE } from '../../global/_enums/frameworkPath/frameworkPath.enum.js'

export default async (id, scope) => {
  const folderPath = scope + '/_motifs/' + id
  await FOLDER.create(folderPath)

  /* `.motif.js` file */
  await FILE.create(
    folderPath,
    id + '.motif.js',
    () =>
`import { EN, FR } from '${
  global[FRAMEWORK_PATH] === NODE_MODULE
    ? 'motifs-js/_motifs/'
    : '../'
}lang/_enums/lang.enum.js'

export default {
  id: '${ id }',
  names: {
    [EN]: 'Unknown',
    [FR]: 'Inconnu'
  }
}`
  )

  /* `description` folder & file */
  const descriptionPath = folderPath + '/description'
  await FOLDER.create(descriptionPath)
  await FILE.create(
    descriptionPath,
    'description.md',
    scope => 'New KAMI !'
  )

  return
}