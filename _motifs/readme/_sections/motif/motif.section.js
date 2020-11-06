import langEnum from "../../../lang/_enums/lang.enum.js";
import INSTANCE from "../../../instance/instance.motif.js";
import formatEnum from "../../../../_motifs/get/_enums/format/format.enum.js";
import PANTHEON from "../../../pantheon/pantheon.motif.js";

export default (kami, kamis) => 

  new Promise(resolve => {

    INSTANCE.get(
      kami,
      {
        format: formatEnum.FILE_PATH
      })
      .then(occurences =>

        resolve(
`# \`${
  kami.parents
    ? kami.parents.map(parentId =>
    
      (parentId === PANTHEON.id
        ? '*'
        
        : parentId)
        + '-')
      .join('')
    
    : '' }${ kami.id }\`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**${ kami.names[langEnum.ABS] }** is also known as :
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

${ kami.description }`

    : ''
}

## Properties

**Count: ${ Object.keys(kami).length - 5 }.**

${
  Object.keys(kami).filter(key =>
    
    ![ 'kamiId', 'parents', 'scope',
      'folder', 'file' ]
      .includes(key))
    .map(key =>
    
    `* \`${ key }\``)
    .join('\n')
}${

  kami.regExp
    ?
`

## Occurences

**Count : ${ occurences.length }.**

Matching regular expression :

${
  Array.isArray(kami.regExp)
    ? kami.regExp.map(_regExp =>
      
      `* \`${ _regExp.toString() }\``)
      .join(',\n')

    : `\`${ kami.regExp.toString() }\``
}.

${ occurences.map(filePath =>
  
  `* [\`${ filePath }\`](${ filePath })`)
  .join('\n')
}`

    : ''
}${
  kami.flavour
    ? 
`

## Flavour

${ kami.flavour }`

    : ''
}
`
        ))
  })