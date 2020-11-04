import IMAGE from '../../../book-image/image.kami.js'
import INSTANCE from '../../../instance/instance.kami.js'
import formatEnum from '../../../get/_enums/format/format.enum.js'

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