import FOLDER from "../../folder/folder.motif.js";
import fs from 'fs'
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";
import websiteMotif from "../../website/website.motif.js";
import { WEBSITE_NOT_FOUND } from "../../website/build/_errors/build.errors.js";
import websiteFolderMotif from "../../website-folder/website-folder.motif.js";
import fileMotif from "../../file/file.motif.js";
import jsontoxml from 'jsontoxml'
import folderMotif from "../../folder/folder.motif.js";

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
  const websiteBuildPath = dist + '/' + id
  await folderMotif.clear(websiteBuildPath)

  const {
    url,
    provision,
    mapping
  } = website
  const data = await provision()
  const result = await websiteFolderMotif.build(
    id,
    websiteFolderMotif.shape(mapping(
      data,
      options
    )),
    dist,
    url
  )

  await fileMotif.create(
    websiteBuildPath,
    'sitemap.xml',
    () => jsontoxml(
      {
        urlSet: [ ...result.sitemap ]
      },
      { xmlHeader: true })
  )
  
  try {

    const websiteSplitPath = website.path.split('/')
    const websiteSrcPath = websiteSplitPath
      .slice(1, websiteSplitPath.length - 1)
      .join('/')
    const assetsSrcPath = websiteSrcPath + '/_assets'
    fs.statSync(global[PROJECT_PATH]
      + '/' + assetsSrcPath)
    const assetsBuildPath = websiteBuildPath + '/assets'
    await FOLDER.create(assetsBuildPath)
    await FOLDER.copy(
      '/' + assetsSrcPath,
      '/' + assetsBuildPath,
      options
    )
  } finally {
    return website
  }
}