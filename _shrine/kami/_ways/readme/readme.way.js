import langEnum from "../../../lang/_enums/lang.enum.js";

export default (kami, log = true) => {

  log && console.log(kami.id)

  return `## \`${ kami.id }\`

![The ${ kami.id }kami pictogram](/${
    (kami.path || '_shrine') }/${ kami.id }/${ kami.id
}.picto.svg)

**${ kami.names[langEnum.ABS] }** or ${
  kami.names[langEnum.ABS] }-KAMI, also known as :
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
}