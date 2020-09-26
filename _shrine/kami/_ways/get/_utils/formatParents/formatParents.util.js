import PANTHEON from '../../../../../pantheon/pantheon.kami.js'

export default path => {

  if (!path)

    return false

  const parents = path.slice()
    .replace(/_shrine\//g, '')
    .split('/')

  if (!parents[0])

    parents.shift()

  if (parents[0] === 'kami.js') {

    parents[0] = PANTHEON.id
  }

  return parents
}