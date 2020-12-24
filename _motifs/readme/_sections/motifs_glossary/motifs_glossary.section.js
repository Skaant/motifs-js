import langEnum from "../../../lang/_enums/lang.enum.js";

export default motifs => 

  new Promise(resolve =>

    resolve(
`## MOTIFS' glossary
    
${
  motifs.map(motif =>
    `* ${
      motif.symbol ? motif.symbol + ' ' : ''
    }[\`${ motif.id }\`](#${ motif.id }) : ${
      typeof motif.names[langEnum.EN] === 'string'
        ? motif.names[langEnum.EN]
        : motif.names[langEnum.EN].join(', ')
    }`
  )
    .join('\n')
}`
    ))