import KAMI from "../../kami.kami.js"

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

    KAMI.get().then(kamis => {

      if (id) {

        const kami = kamis.find(kami =>
          kami.id === id)

        if (!kami) reject(new Error(
          'No KAMI "' + id + '"'))

        if (!kami._specs) reject(new Error(
          'No "_specs" for KAMI "' + id + '"'))

        if (log) console.log('"' + id + '"\'s specifications :')

        Promise.all(kami._specs
          .map(spec => spec(kami)))
          .then(assertions => {

            if (log) console.log(assertions
              .map((result, label) =>
                `${ label } => ${ result }\n`)
              .join('\n'))

            resolve()
          })

      } else {

        Promise.all(kamis
          .map(kami =>

            new Promise(resolve =>

              Promise.all(KAMI._specs
                .map(spec => spec(kami)))
                .then(assertions => resolve({
                  id: kami.id,
                  assertions: assertions.reduce(
                    (acc, assertions) =>

                      ([
                        ...acc,
                        ...assertions
                      ]),
                    []
                  )
                })))))

          .then(kamisAssertions => {

            if (log) console.log(kamisAssertions
              .map(({ id, assertions }) =>
              
                '\nKAMI "' + id + '"\'s specifications :\n\n'
                  + assertions
                    .map(([ result, label ]) =>
                      `* ${ result } => ${ label }`)
                    .join('\n'))
              .join('\n'))
          })
      }
    })
  })