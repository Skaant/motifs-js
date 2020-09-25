import SECTION from '../../_shrine/section/section.kami.js'
import FILE from '../../../file/file.kami.js'
import README from '../../readme.kami.js'

export default ({
  log
} = {}) =>

  new Promise(resolve => {

    let timestamp = Date.now()

    README.get()
      .then(({ provision, mapping }) =>
      
        provision()
          .then(data =>

            SECTION.create(mapping(data))
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
