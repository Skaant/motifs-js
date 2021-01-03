import { promises as fs } from 'fs'
import createWay from "./create.way.js"

export default () =>

  new Promise(resolve =>

    createWay(
      '_tests',
      'folder-create-way',
      () => []
    )

      .then(() => 

        fs.access(
          global.PROJECT_PATH
            + '/_tests/folder-create-way'
        )
          
          .then(() => {
            
            return resolve([

              [
                true,
                'Should create a folder "/_tests/folder-create-way".' ]
            ])
          })))