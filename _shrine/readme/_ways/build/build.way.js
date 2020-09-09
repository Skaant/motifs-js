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
          .then(kamis =>

            Promise.all(kamis.map(kami =>
              
              kamiKami.readme(kami)))
              
              .then(kamisReadme => {

                const newData = data.slice(
                  0,
                  /** We keep old data up to `## kami` section,
                   * the first automatically generated. */
                  data.search('## `kami`'))

                  + kamisReadme.join('\n\n')

                  /** 3. Write new content in README file */
                  fs.writeFile(
                    './README.md',
                    newData,
                    err => err ? reject(err) : resolve())
              }))
      })
  })
