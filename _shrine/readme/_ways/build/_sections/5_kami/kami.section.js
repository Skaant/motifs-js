import langEnum from "../../../../../lang/_enums/lang.enum.js";
import FILE from "../../../../../file/file.kami.js";
import formatEnum from "../../../../../file/_ways/get/_enums/format/format.enum.js";

export default kami => 

  new Promise(resolve => {

    FILE.get(kami.regExp, {
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