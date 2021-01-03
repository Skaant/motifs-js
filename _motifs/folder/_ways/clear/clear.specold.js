import { promises as fs } from 'fs'
import clearWay from "./clear.way.js"

export default kami =>

  new Promise(resolve =>

    kami.create(
      '_tests',
      'folder-clear-way',
      () => []
    )

      .then(() =>

        clearWay('_tests/folder-clear-way')
          .then(() =>

            fs.access(
              global.PROJECT_PATH
                + '/_tests/folder-clear-way'
            )
              
              .then(() => 
              
                reject([

                  [
                    false,
                    'Should remove the folder "/_tests/folder-clear-way".' ]
                ]))
              
              .catch(() =>

                resolve([
                  [
                    true,
                    'Should remove the folder "/_tests/folder-clear-way".' ]
                ])))))