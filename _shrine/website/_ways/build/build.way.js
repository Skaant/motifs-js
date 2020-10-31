import FOLDER from "../../../folder/folder.kami.js";
import WEBSITE from '../../../website/website.kami.js'
import formatEnum from "../../../get/_enums/format/format.enum.js";
import INSTANCE from "../../../instance/instance.kami.js";

export default (
  id,
  options
) =>

  new Promise(resolve =>

    /** While a KAMI doesn't have a
     *  specific `get` method, we use `FILE.get()`. */
    INSTANCE.get(
      WEBSITE,
      {
        format: formatEnum.ESM
      })

      .then(websites => {

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

            .then(() => {
              
              FOLDER.create(
                '/_build/' + id,
                'assets',
                folderScope => {

                  FOLDER.copy(
                    '/_websites/'
                      + id + '/_assets',
                    folderScope,
                    options
                  )
                    .then(() =>
                        
                      resolve(website))

                  /** meh */
                  return []
                })
            }))
      }))