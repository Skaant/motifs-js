import langEnum from "../../../lang/_enums/lang.enum.js";
import INSTANCE from "../../../instance/instance.motif.js";
import formatEnum from "../../../../_motifs/get/_enums/format/format.enum.js";
import occurenceLevelEnum from "../../../occurence/_enums/level/occurence.level.enum.js";

const occurenceLevelToMatchMechanism = {
  [occurenceLevelEnum.FILE]: 'fileMatch',
  [occurenceLevelEnum.FOLDER]: 'folderMatch'
}

export default kami => 

  new Promise(resolve => {

    INSTANCE.get(
      kami,
      {
        format: formatEnum.FILE_PATH
      })
      .then(instances =>

        resolve(
`# \`${
  kami.symbol
    ? kami.symbol + ' '

    : ''
}${ kami.id }\`

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

${
  Object.entries(kami)
    .filter(([ key ]) =>
    
      ![ 'motifId', 'description' ].includes(key))
    .map(([ key, value ]) =>
      
      `* \`${ key }\`${
        typeof value === 'string'
          ? (' : ' + value)

          : ''
      }`)
    .join('\n')
}${

  kami.occurences
    ?
`

## Instances

**Count : ${ instances.length }.**

### Matching mechanims

${
  Array.isArray(kami.occurences)
    ? kami.occurences.map(occurence =>
      
      `* \`${ occurence.level
        && occurence[occurenceLevelToMatchMechanism[occurence.level]].toString() }\``)
      .join(',\n')

    : `\`${ kami.regExp.toString() }\``
}.

### Instances list

${ instances.map(filePath =>
  
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