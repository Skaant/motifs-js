import FOLDER from '../../../folder/folder.motif.js'
import FILE from '../../../file/file.motif.js'
import getPantheonRelativePathUtil from './_utils/getPantheonRelativePath/getPantheonRelativePath.util.js'

export default (scope, id) =>

  new Promise(resolve => {

    FOLDER.create(
      scope,
      '_motifs',
      scope => ([
        FOLDER.create(
          scope,
          id,
          scope => ([
            FILE.create(
              scope,
              id + '.kami.js',
              () =>
`import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: '${ id }',
  names: namesProp,
  description: descriptionProp
}`
            ),
            FOLDER.create(
              scope,
              '_props',
              scope => ([
                FOLDER.create(
                  scope,
                  'names',
                  folderScope => ([
                    FILE.create(
                      folderScope,
                      'names.prop.js',
                      scope =>
`import langEnum from '${
  getPantheonRelativePathUtil(
    global.PANTHEON_SCOPE,
    folderScope
  )
}_shrine/lang/_enums/lang.enum.js'

export default {
  [langEnum.ABS]: '${ id.toUpperCase() }',
  [langEnum.EN]: 'Unknown',
  [langEnum.FR]: 'Inconnu'
}`
                    )
                  ])
                ),
                FOLDER.create(
                  scope,
                  'description',
                  scope => ([
                    FILE.create(
                      scope,
                      'description.prop.js',
                      scope =>
`export default \`New KAMI !\``
                    )
                  ])
                )
              ])
            )
          ])
        )
      ])
    )
      .then(resolve)
  })