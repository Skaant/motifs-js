import KAMI from "../../kami.kami.js";

export default () =>

  new Promise(resolve =>
    
    KAMI.get()
      .then(kamis => {

        resolve(`
        
### Instances

${ kamis.map(kami => {

  const kamiPath = '/' + (kami.path || '_shrine/')
    + kami.folder + '/' + kami.file

  return `* [\`${ kami.id }\`](#${ kami.id }) [\`${
    kamiPath }\`](${ kamiPath })`
  })
  .join('\n')
}`
        )
      }))