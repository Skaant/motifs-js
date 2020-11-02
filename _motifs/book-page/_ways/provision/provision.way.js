import IMAGE from '../../../book-image/book-image.motif.js'
import INSTANCE from '../../../../_shrine/instance/instance.kami.js'
import formatEnum from '../../../../_shrine/get/_enums/format/format.enum.js'

/** */
export default (page, options) =>

  new Promise(resolve => {

    const splitFilePath = page.filePath.split('/')
    const scope = splitFilePath.slice(
      0,
      splitFilePath.length - 1
    ).join('/')

    INSTANCE.get(
      IMAGE,
      {
        ...options,
        format: formatEnum.FILE_PATH,
        scope
      }
    )

      .then(images =>
        
        resolve({
          ...page,
          images: images.length > 0
            ? images

            : false
        }))
  })