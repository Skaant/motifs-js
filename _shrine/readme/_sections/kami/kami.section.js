import langEnum from "../../../lang/_enums/lang.enum.js";
import INSTANCE from "../../../instance/instance.kami.js";
import formatEnum from "../../../get/_enums/format/format.enum.js";
import PANTHEON from "../../../pantheon/pantheon.kami.js";

export default (kami, kamis) => 

  new Promise(resolve => {

    INSTANCE.get(
      kami,
      {
        format: formatEnum.FILE_PATH
      })
      .then(occurences =>

        resolve(
`## \`${
  kami.parents
    ? kami.parents.map(parentId =>
    
      (parentId === PANTHEON.id
        ? '*'
        
        : parentId)
        + '-')
      .join('')
    
    : '' }${ kami.id }\`

**${
  (kami.parents
    ? (kami.parents.map(parentId =>
    
      kamis.find(kami =>
        
        kami.id === parentId)
        .names[langEnum.ABS]
        + '-')
      .join(''))

    : '')

    + kami.names[langEnum.ABS]
}** is a ${
  kami.parents[0] === PANTHEON.id
    ? 'PANTHEON KAMI'

    : 'project specific KAMI'
}.

It is known as :
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