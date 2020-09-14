import KAMI from '../../../kami/kami.kami.js'
import introSection from './_sections/1_intro/intro.section.js'
import what_isSection from './_sections/2_what_is/what_is.section.js'
import how_toSection from './_sections/3_how_to/how_to.section.js'
import kamis_glossarySection from './_sections/4_kamis_glossary/kamis_glossary.section.js'
import SECTION from '../../_shrine/section/section.kami.js'
import FILE from '../../../file/file.kami.js'
import kamiSection from './_sections/5_kami/kami.section.js'

export default () =>

  new Promise(resolve =>
    
    KAMI.get()
      .then(kamis =>

        SECTION.create([
          introSection(kamis),
          what_isSection,
          how_toSection,
          kamis_glossarySection(kamis),
          ...kamis.map(kami =>
            
            kamiSection(kami))
        ])
          .then(content =>

            FILE.create(
              '',
              'README.md',
              () => content,
              {
                force: true
              }
            )
              .then(resolve))))
