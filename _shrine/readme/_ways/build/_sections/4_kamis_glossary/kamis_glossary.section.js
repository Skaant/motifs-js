import langEnum from "../../../../../lang/_enums/lang.enum.js";

export default kamis => 

  new Promise(resolve =>

    resolve(
`## KAMIS' glossary
    
${
  kamis.map(kami => 
    `${
        kami.parents
          ? kami.parents.map(() => '  ').join('')
          : ''
    }* [${
      (kami.parents
        ? (kami.parents.map(parentKamiId =>
          
            kamis.find(kami =>
              
              kami.id === parentKamiId)
              .names[langEnum.ABS])
            .join('-').toUpperCase() + '-')
        : '')
        + kami.names[langEnum.ABS]
    }](#${
      (kami.parents
        ? (kami.parents.join('-') + '-')
        : '')
        + kami.id
    }), \`${
      (kami.parents
        ? (kami.parents.join('-') + '-')
        : '')
        + kami.id
    }\` : ${
      typeof kami.names[langEnum.EN] === 'string'
        ? kami.names[langEnum.EN]
        : kami.names[langEnum.EN].join(', ')
    }`
  )
    .join('\n')
}`
    ))