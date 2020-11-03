import PANTHEON from '../../../../../../_shrine/pantheon/pantheon.kami.js'

export default path => {

  if (!path)

    return false

  const parents = path.slice()
    .replace(/_motifs\//g, '')
    .split('/')

  if (!parents[0])

    parents.shift()

  if (parents[0] === 'motifs') {

    parents[0] = PANTHEON.id
  }

  return parents
}