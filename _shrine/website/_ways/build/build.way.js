import FOLDER from "../../../folder/folder.kami.js";
import FILE from "../../../file/file.kami.js";
import WEBSITE from '../../../website/website.kami.js'
import formatEnum from "../../../file/_ways/get/_enums/format/format.enum.js";

export default (
  scope = '',
  id,
  options
) =>

  new Promise(resolve =>

    /** While a KAMI doesn't have a
     *  specific `get` method, we use `FILE.get()`. */
    FILE.get(
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

        provision()
        
          .then(_data =>

            FOLDER.create(
              scope,
              '_build',
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
                '/_build',
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