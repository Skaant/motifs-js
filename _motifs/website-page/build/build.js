import fileMotif from "../../file/file.motif.js"
import folderMotif from "../../folder/folder.motif.js"

export default async (name, shape, scope) => {
  let _scope = scope
  if (name !== 'index.html') {
    _scope = scope + '/' + name
    await folderMotif.create(_scope)
  }
  const {
    template,
    data
  } = shape
  await fileMotif.create(
    _scope,
    'index.html',
    () => template(data)
  )
  /** @note May be extended with diverse file contents */
  if (data && data.images) {
    for (const image of data.images) {
      await fileMotif.copy(
        image,
        _scope
          + '/' + image.split('/').pop()
      )
    }
  }
}