import README_SECTION from '../../../readme-section/readme-section.motif.js'
import FILE from '../../../file/file.motif.js'
import README from '../../readme.motif.js'

export default ({
  log
} = {}) =>

  new Promise(resolve => {

    let timestamp = Date.now()

    README.get()
      .then(({ provision, mapping }) =>
      
        provision()
          .then(data =>

            README_SECTION.create(mapping(data))
              .then(content =>

                FILE.create(
                  '',
                  'README.md',
                  () => content,
                  {
                    force: true
                  }
                )
                  .then(() => {

                    log && console.log(
                      'The README build has been completed in '
                        + (Date.now() - timestamp) + ' milliseconds.')
                    
                    resolve()
                  }))))
  })
