import langEnum from "../../../lang/_enums/lang.enum.js";
import INSTANCE from "../../../instance/instance.motif.js";
import formatEnum from "../../../../_motifs/get/_enums/format/format.enum.js";
import occurenceLevelEnum from "../../../occurence/_enums/level/occurence.level.enum.js";

const occurenceLevelToMatchMechanism = {
  [occurenceLevelEnum.FILE]: 'fileMatch',
  [occurenceLevelEnum.FOLDER]: 'folderMatch'
}

export default motif => 

  new Promise(resolve => {

    INSTANCE.get(
      motif,
      {
        format: formatEnum.FILE_PATH
      })
      .then(instances =>

        resolve(
`# \`${ motif.id }\`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**${ motif.names[langEnum.ABS] }** is also known as :
${
  [ langEnum.EN,
    langEnum.FR
  ].map(lang =>
    
`
* [${ lang }] ${
  typeof motif.names[lang] === 'string'
    ? motif.names[lang]
    : motif.names[lang].join(', ') }`)
}.${
  motif.symbol
    ? `**Symbol : **${ motif.symbol }`
    
    : ''
}${
  motif.description
    ? 
`

${ motif.description }`

    : ''
}

## Properties

${
  Object.entries(motif)
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

  motif.occurences
    ?
`

## Instances

**Count : ${ instances.length }.**

### Matching mechanims

${
  Array.isArray(motif.occurences)
    ? motif.occurences.map(occurence =>
      
      `* \`${ occurence.level
        && occurence[occurenceLevelToMatchMechanism[occurence.level]].toString() }\``)
      .join(',\n')

    : `\`${ motif.regExp.toString() }\``
}.

### Instances list

${ instances.map(filePath =>
  
  `* [\`${ filePath }\`](${ filePath })`)
  .join('\n')
}`

    : ''
}${
  motif.flavour
    ? 
`

## Flavour

${ motif.flavour }`

    : ''
}
`
        ))
  })