import langEnum from "../../../../../lang/_enums/lang.enum.js";

export default kamis => 

  new Promise(resolve =>

    resolve(
`## KAMIS' glossary
    
${
  kamis.map(kami =>
    
    `* [\`${ kami.id }\`](#kami), *${
      kami.names[langEnum.ABS]
    }-KAMI*, ${
      typeof kami.names[langEnum.EN] === 'string'
        ? kami.names[langEnum.EN]
        : kami.names[langEnum.EN].join(', ')
    }`)
    .join('\n')
}`
    ))