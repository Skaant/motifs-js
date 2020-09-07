import shrineExists from './_utils/shrineExists/shrineExists.util.js'
import createShrineFolder from './_utils/createShrineFolder/createShrineFolder.js'

/**
 * Creates a `shrine` if it 
 *  doesn't exist in the given scope.
 * 
 * @return {Promise<string>} Resolves
 *  with the shrine path. */
export default scope => 

  new Promise((resolve, reject) => {

    shrineExists(scope)
      .then((exists, shrinePath) => exists
        ? resolve(shrinePath)
        : createShrineFolder(shrinePath)
          .then(() => resolve(shrinePath)))
  })