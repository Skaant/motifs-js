import fileMotif from "../../file/file.motif.js"
import folderMotif from "../../folder/folder.motif.js"

export default async (name, shape, scope) => {
  let _scope = scope
  if (name !== 'index.html') {
    _scope = scope + '/' + name
    await folderMotif.create(_scope)
  }
  await fileMotif.create(
    _scope,
    'index.html',
    () => shape.template()
  )
  /** @todo images */
}