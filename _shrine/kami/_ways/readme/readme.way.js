import langEnum from "../../../lang/_enums/lang.enum.js";

export default kami =>
`## \`${ kami.id }\`

**${ kami.names[langEnum.ABS] }**, also known as :
${
  [ langEnum.EN,
    langEnum.FR
  ].map(lang =>
    
`
* ${ kami.names[lang] } [${ lang }]`)
}

${
  kami.description
    ? 
`### Description

${ kami.description }`

    : ''
}
`