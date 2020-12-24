import { 
  promises as fs,
  constants as fsConstants
} from 'fs'

export default (images, dest, options) =>

  images.map(imagePath =>
      
    fs.copyFile(
      global.PATH + imagePath,
      global.PATH + dest
        + '/' + imagePath.split('/').pop()
    ))