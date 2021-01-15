import formatEnum from "../../get/_enums/format/format.enum.js"
import instanceMotif from "../../instance/instance.motif.js"
import websiteMotif from "../../website/website.motif.js"

export default async (id = false, options = {}) => {

  const websites = await instanceMotif.get(
    websiteMotif,
    {
      format: formatEnum.ESM,
      scope: options && options.scope
    }
  )

  return id
    ? websites.find(website =>
      id === website.id)
    : websites
}