import fileMotif from "../../file/file.motif.js"
import { NAME_DOES_NOT_HOLD_HTML_EXTENSION } from "./_errors/build.errors.js"

export default async (name, description, scope) => {
  if (!name.endsWith('.html'))
    throw new Error(NAME_DOES_NOT_HOLD_HTML_EXTENSION)
  await fileMotif.create(
    scope,
    name,
    () => description.template()
  )
  /** @todo images */
}