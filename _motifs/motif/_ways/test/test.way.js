import MOTIF from "../../motif.motif.js"
import FOLDER from "../../../folder/folder.motif.js"
import testSuiteUtil from "./_utils/testSuite/testSuite.util.js"
import logSpecsUtil from "./_utils/logSpecs/logSpecs.util.js"
import summarizeSpecsUtil from "./_utils/summarizeSpecs/summarizeSpecs.util.js"

/** **MOTIF(S) TEST**
 * 
 * If `id` isn't set,
 *  apply test through all MOTIFS.
 */
export default (
  id = false,
  log = false,
  doc = false) =>

  new Promise((resolve, reject) => {

    log && console.log(`You, mortal, decided to challenge me.
    
I'll show you how well my MOTIFS and me are performing !\n`)

    FOLDER.clear('/_tests')
      .then(() =>
      
        Promise.all([
          FOLDER.create(
            '',
            '_tests',
            () => []
          ),
          MOTIF.get()
        ])
        
          .then(([ _, kamis ]) => {

            if (id) {

              const kami = kamis.find(kami =>
                kami.id === id)

              if (!kami) reject(new Error(
                'No MOTIF "' + id + '"'))

              testSuiteUtil(kami)
                .then(assertions => {

                  const summary = summarizeSpecsUtil(
                    id,
                    assertions)
                  
                  log && logSpecsUtil(id, assertions, summary)

                  if (summary.kos.length > 0) {

                    reject(new Error(JSON.stringify(summary.kos)))
                  }

                  resolve()
                })

            } else {

              Promise.all(kamis
                .map(kami =>

                    testSuiteUtil(kami)))

                .then(kamisAssertions => {

                  const kamisSummary = kamisAssertions
                    .reduce(
                      (acc, assertions, index) => {

                        const kamiId = kamis[index].id

                        const summary = summarizeSpecsUtil(
                          kamiId,
                          assertions)

                        log && logSpecsUtil(
                          kamis[index].id,
                          assertions,
                          summary
                        )

                        return {
                          ran: acc.ran + summary.ran,
                          kos: [
                            ...acc.kos,
                            ...summary.kos.map(ko => ({
                              kamiId,
                              ...ko
                            }))
                          ]
                        }
                      },
                    {
                      ran: 0,
                      kos: []
                    })

                  log && console.log('\n')

                  console.log('Total tests run : '
                    + kamisSummary.ran + '.\nFailed : '
                    + kamisSummary.kos.length
                      + (kamisSummary.kos.length > 0
                        ? ', see below.\n\n'
                          + kamisSummary.kos.map(ko =>
                            
                            `* ${ ko.kamiId.toUpperCase()
                            } / ${ ko.id
                            } : ${ ko.label }`).join('\n')
                          + '\n'
                        : ''))

                  if (kamisSummary.kos.length > 0) {

                    reject(new Error(JSON.stringify(kamisSummary.kos)))
                  }

                  resolve()
                })
            }
          }))
  })