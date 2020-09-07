import SHRINE from '../../../shrine/shrine.kami.js'
import createKamiFolder from './_utils/createKamiFolder/createKamiFolder.js'
import createKamiFile from './_utils/createKamiFile/createKamiFile.js'

export default (scope, id) =>

  new Promise((resolve, reject) => {

    SHRINE.create(scope)
      .then(() => createKamiFolder(scope, id)
        .then(() => createKamiFile(scope, id))
  })

  