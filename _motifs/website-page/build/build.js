import fileMotif from "../../file/file.motif.js"
import { NAME_DOES_NOT_HOLD_HTML_EXTENSION } from "./_errors/build.errors.js"

export default async (name, shape, scope) => {
  if (!name.endsWith('.html'))
    throw new Error(NAME_DOES_NOT_HOLD_HTML_EXTENSION)
  await fileMotif.create(
    scope,
    name,
    () => shape.template()
  )
  /** @todo images */
}