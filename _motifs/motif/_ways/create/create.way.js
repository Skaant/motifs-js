import FOLDER from '../../../folder/folder.motif.js'
import FILE from '../../../file/file.motif.js'
import getPantheonRelativePathUtil from './_utils/getPantheonRelativePath/getPantheonRelativePath.util.js'

export default async (scope, id) => {
  const folderPath = scope + '/_motifs/' + id
  await FOLDER.create(folderPath)

  /* `.motif.js` file */
  await FILE.create(
    folderPath,
    id + '.motif.js',
    () =>
`import { EN, FR } from '${
  getPantheonRelativePathUtil(
    global.PANTHEON_SCOPE,
    folderScope
  )
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
    scope,
    'description.md',
    scope => 'New KAMI !'
  )

  return
}