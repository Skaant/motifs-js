import { FEATURE, MODULE,  } from '../../../../spec-section/_enums/type/spec-section.type.enum.js'
import fixSlashFirst from './fixSlashFirst.js'

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'On a string missing "/" at first character, '
        + 'returns it with the "/".',
      test: () => fixSlashFirst('_data/articles/1/1.article.js')
        === '/_data/articles/1/1.article.js'
    },
    {
      type: FEATURE,
      label: 'On a string with "/" at first character, '
        + 'returns it without change.',
      test: () => fixSlashFirst('/_data/articles/1/1.article.js')
        === '/_data/articles/1/1.article.js'
    }
  ]
}