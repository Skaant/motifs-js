import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'
import copyWay from './_ways/copy/copy.way.js'
import BOOK from '../book/book.motif.js'

export default {
  id: 'image',
  parents: [ BOOK.id ],
  names: namesProp,
  description: descriptionProp,
  occurences: [{
    regExp: /_data\/(.*)\.(png|jpg|svg)$/,
    transform: ([ _, scope ]) => ({ scope })
  }],
  copy: copyWay
}