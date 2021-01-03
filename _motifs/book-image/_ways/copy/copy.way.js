import { 
  promises as fs,
  constants as fsConstants
} from 'fs'

export default (images, dest, options) =>

  images.map(imagePath =>

    fs.copyFile(
      global.PROJECT_PATH + imagePath,
      global.PROJECT_PATH + dest
        + '/' + imagePath.split('/').pop()
    ))