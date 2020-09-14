import langEnum from "../../../../../lang/_enums/lang.enum.js";

export default kamis => 

  new Promise(resolve =>

    resolve(
`## KAMIS' glossary
    
${
  kamis.map(kami => {

    const scope = kami.scope
      ? kami.scope
        .replace(/_shrine\//g, '')
        .split('/')
        .slice(1)
      : false
    
    return `* [${
      scope
        ? scope.join('-').toUpperCase() + '-'
        : ''
      + kami.names[langEnum.ABS]
    }](#${ kami.id }), \`${
      scope
        ? scope.join('/') + '/'
        : ''
      + kami.id
    }\` : ${
      typeof kami.names[langEnum.EN] === 'string'
        ? kami.names[langEnum.EN]
        : kami.names[langEnum.EN].join(', ')
    }`
  })
    .join('\n')
}`
    ))