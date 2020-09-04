import fs from 'fs'
import kamiKami from '../../../kami/kami.kami.js'

export default () =>

  new Promise((resolve, reject) => {

    /** 1. README file content is extracted */
    fs.readFile(
      './README.md',
      'utf-8',
      (err, data) => {

        if (err) reject(err)
      
        /** 2. Create new dynamic content is removed */
        kamiKami.get()
          .then(kamis => {
            
            const newData = data.slice(
              0,
              data.search('## `kami`'))

              + kamis.map(kami =>
                  
                '\n\n' + kamiKami.readme(kami))
                
                .join('')

              /** 3. Write new content in README file */
              fs.writeFile(
                './README.md',
                newData,
                err => err ? reject(err) : resolve())
          })
      })
  })
