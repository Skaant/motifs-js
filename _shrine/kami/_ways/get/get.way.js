let cache = {
  globalFiles: false,
  kamis: false
};

/** `kami get way`
 * 
 * Retrieve all project kamis,
 *  and order them by dependency ranks.
 */
export default (id = false) =>

  new Promise((resolve, reject) => {

    if (cache.globalFiles === global.FILES
        && cache.kamis)
      resolve(cache.kamis)

    cache.globalFiles = global.FILES

    Promise.all(global.FILES.reduce(
      (kamiPromises, file) => {
  
        const protoKami = file
          .match(/(.*)\/_shrine\/(.*)\/(.*).kami.js/)
  
        if (file && protoKami) {

          return [
            ...kamiPromises,
            import('file:///'
              + (global.PATH + file).replace(/\//g,'\\'))

              .then(({ default: kami }) => ({
                ...kami,
                scope: protoKami[1],
                folder: protoKami[2],
                file: protoKami[3] + '.kami.js'
              }))
          ]
  
        } else {
  
          return kamiPromises
        }
      },
      []
    ))
      .then(kamis => {
        
        const kamiKamiIndex = kamis.findIndex(kami =>
          
          kami.id === 'kami')
        

        cache.kamis = [
          kamis[kamiKamiIndex],
          ...kamis.slice(0, kamiKamiIndex),
          ...kamis.slice(kamiKamiIndex + 1)
        ]

        resolve(cache.kamis)
      })
      .catch(err => reject(err))
  })