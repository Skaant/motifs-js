import fileMotif from "../../file/file.motif.js"

export default async (name, description, scope) => {
  await fileMotif.create(
    scope,
    name,
    () => description.template(description.data)
  )
}