import FOLDER from "../../folder/folder.motif.js";
import fs from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";
import websiteMotif from "../../website/website.motif.js";
import { WEBSITE_NOT_FOUND } from "../../website/build/_errors/build.errors.js";
import websiteFolderMotif from "../../website-folder/website-folder.motif.js";

export default async (
  id,
  options = {}
) => {

  const {
    scope = '',
    dist = '_build'
  } = options

  const website = await websiteMotif.get(id, { scope })
  if (!website)
    throw new Error(WEBSITE_NOT_FOUND)
  
  const result = await websiteFolderMotif.build(
    id,
    website,
    dist
  )

  await fileMotif.create(
    scope,
    'sitemap.xml',
    () => jsontoxml(result.sitemap)
  )
  
  try {

    const websiteSplitPath = website.path.split('/')
    const websiteBuildPath = websiteSplitPath
      .slice(1, websiteSplitPath.length - 1)
      .join('/')
      /** @todo options.scope */
      + '/_build'
    const assetsPath = websiteBuildPath + '/_assets'

    fs.statSync(global[PROJECT_PATH]
      + '/' + assetsPath)

    await FOLDER.create(distFolderPath + '/_assets')
    FOLDER.copy(
      assetsPath,
      folderScope,
      options
    )
  } finally {
    return
  }
}