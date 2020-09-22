import KAMI from "../../kami.kami.js"
import testSuiteUtil from "./_utils/testSuite/testSuite.util.js"
import logSpecsUtil from "./_utils/logSpecs/logSpecs.util.js"

/** **KAMI(S) TEST**
 * 
 * If `id` isn't set,
 *  apply test through all KAMIS.
 */
export default (
  id = false,
  log = false,
  doc = false) =>

  new Promise((resolve, reject) => {

    log && console.log(`You, mortal, decided to challenge me.
    
I'll show you how well my KAMIS and me are performing !\n`)

    KAMI.get().then(kamis => {

      if (id) {

        const kami = kamis.find(kami =>
          kami.id === id)

        if (!kami) reject(new Error(
          'No KAMI "' + id + '"'))

        testSuiteUtil(kami)
          .then(assertions =>
            
            logSpecsUtil(id, assertions))

      } else {

        Promise.all(kamis
          .map(kami =>

              testSuiteUtil(kami)))

          .then(kamisAssertions => {

            log && kamisAssertions
              .map((assertions, index) =>

                logSpecsUtil(
                  kamis[index].id,
                  assertions
                ))
          })
      }
    })
  })