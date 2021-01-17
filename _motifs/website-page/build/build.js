import fileMotif from "../../file/file.motif.js"

export default async (name, shape, scope) => {
  await fileMotif.create(
    scope,
    name.endsWith('.html')
      ? name
      : (name + '.html'),
    () => shape.template()
  )
  /** @todo images */
}