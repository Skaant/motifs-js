import FOLDER from "motifs-js/_motifs/folder/folder.motif.js";
import INSTANCE from "motifs-js/_motifs/instance/instance.motif.js";
import WEBSITE from 'motifs-js/_motifs/website/website.motif.js'
import formatEnum from "motifs-js/_motifs/get/_enums/format/format.enum.js";
import fs from 'fs'
import { PROJECT_PATH } from "motifs-js/_motifs/global/_enums/names/global.names.enum.js";

export default (
  id,
  options
) =>

  new Promise(resolve =>

    /** While a MOTIF doesn't have a
     *  specific `get` method, we use `FILE.get()`. */
    Promise.all([
      INSTANCE.get(
        WEBSITE,
        {
          format: formatEnum.ESM
        }),
      FOLDER.create(
        '',
        '_build',
        () => [])
    ])

      .then(([ websites ]) => {

        const website = websites.find(website =>
          
          website.id === id)

        if (!website) throw new Error(
          'No website "' + id + '".')

        const {
          provision,
          mapping,
          ...data
        } = website

        Promise.all([
          FOLDER.clear('_build/' + id),
          provision()
        ])
        
          .then(([ , _data ]) =>

            FOLDER.create(
              '',
              '_build/' + id,
              folderScope => mapping(
                folderScope,
                {
                  ...data,
                  ..._data
                },
                options
              ))

            .then(async () => {
              
              /** If a website got an `_assets` folder,
               * copy it. Else do nothing */
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

                await FOLDER.create(
                  /** @todo scope */
                  '_build/' + id,
                  '_assets',
                  folderScope => {
                    FOLDER.copy(
                      assetsPath,
                      folderScope,
                      options
                    )

                    return []
                  })
              } finally {
                resolve()
              }
            }))
      }))