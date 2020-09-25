import langEnum from "../../../_shrine/lang/_enums/lang.enum.js";
import INSTANCE from "../../../_shrine/instance/instance.kami.js";
import formatEnum from "../../../_shrine/get/_enums/format/format.enum.js";

export default kami => 

  new Promise(resolve => {

    INSTANCE.get(
      kami,
      {
        format: formatEnum.FILE_PATH
      })
      .then(occurences =>

        resolve(
`## \`${ kami.id }\`

**${ kami.names[langEnum.ABS] }** or ${
  kami.names[langEnum.ABS] }-KAMI, also known as :
${
  [ langEnum.EN,
    langEnum.FR
  ].map(lang =>
    
`
* [${ lang }] ${
  typeof kami.names[lang] === 'string'
    ? kami.names[lang]
    : kami.names[lang].join(', ') }`)
}.${
  kami.description
    ? 
`

### Description

${ kami.description }`

    : ''
}${

  kami.regExp
    ?
`

## Occurences

Matching regular expression :

\`${ kami.regExp.toString() }\`.

${ occurences.map(filePath =>
  
  `* [\`${ filePath }\`](${ filePath })`)
  .join('\n')
}`

    : ''
}${
  kami.flavour
    ? 
`

### Flavour

${ kami.flavour }`

    : ''
}
`
        ))
  })