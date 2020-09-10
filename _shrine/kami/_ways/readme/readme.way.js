import getSectionUtil from "./_utils/getSection/getSection.util.js"

export default (kami, log = true) => 

  new Promise(resolve => {

    log && console.log(kami.id)

    if (kami._readme) {

      kami._readme()
        .then(specificKamiReadme =>
        
          resolve(getSectionUtil(
            kami,
            specificKamiReadme
          )))
          
    } else {

      resolve(getSectionUtil(kami))
    }
  })