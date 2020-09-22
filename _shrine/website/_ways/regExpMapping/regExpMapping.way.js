import WEBSITE from '../../website.kami.js'

export default filePath => {

  const [
    _,
    folder,
    id
  ] = filePath.match(WEBSITE.regExp)

  return {
    folder,
    id
  }
}

