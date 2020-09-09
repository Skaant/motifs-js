import SHRINE from '../../../shrine/shrine.kami.js'
import FOLDER from '../../../folder/folder.kami.js'
import FILE from '../../../file/file.kami.js'

export default (scope, id) =>

  new Promise((resolve, reject) => {

    SHRINE.create(
      scope,
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
                  scope => ([
                    FILE.create(
                      scope,
                      'names.prop.js',
                      scope =>
`import langEnum from '${
  scope.split('/')
    .slice(2).map(() => '../').join('')
}lang/_enums/lang.enum.js'

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