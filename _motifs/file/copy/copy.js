import { promises as fs } from 'fs'
import { FILES } from '../../global/_enums/names/global.names.enum.js'

export default async (src, dest, options) => {

  const _dest = (dest.startsWith('/') ? '' : '/') + dest

  await fs.copyFile(
    global.PROJECT_PATH
      + (src.startsWith('/') ? '' : '/')
      + src,
    global.PROJECT_PATH + _dest
  )

  global[FILES].push(_dest)
  return
}