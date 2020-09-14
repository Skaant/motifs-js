/** README-SECTION CREATE WAY */
export default sections =>

  new Promise(resolve => {

    const content = []

    sections.forEach(section =>

      typeof section === 'string'
        ? content.push(section)
        : content.push(false))

    Promise.all(
      sections.filter(section =>
        
        typeof section !== 'string'))
      .then(_sections => {

        let promiseCount = 0
      
        content.forEach((section, index) => {

          if (section === false)
            
            content[index] =
                _sections[promiseCount++]
        })

        resolve(content.join(`\n\n`))
      })
  })