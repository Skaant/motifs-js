export default () =>

  new Promise((resolve, reject) => {

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
        
        resolve([
          kamis[kamiKamiIndex],
          ...kamis.slice(0, kamiKamiIndex),
          ...kamis.slice(kamiKamiIndex + 1)
        ])
      })
      .catch(err => reject(err))
  })