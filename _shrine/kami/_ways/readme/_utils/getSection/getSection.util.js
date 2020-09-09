import langEnum from "../../../../../lang/_enums/lang.enum.js";

export default (kami, specificKamiReadme = false) =>

`## \`${ kami.id }\`

![${ kami.names[langEnum.ABS] } pictogram](/${
    (kami.path || '_shrine') }/${ kami.id }/${ kami.id
}.picto.svg)

**${ kami.names[langEnum.ABS] }** or ${
  kami.names[langEnum.ABS] }-KAMI, also known as :
${
  [ langEnum.EN,
    langEnum.FR
  ].map(lang =>
    
`
* [${ lang }] ${
  typeof kami.names[lang] === 'string'
    ? kami.names[lang]
    : kami.names[lang].join(', ') }`)
}${
  kami.description
    ? 
`### Description

${ kami.description }`

    : ''
}${
  kami.flavour
    ? 
`### Flavour

${ kami.flavour }`

    : ''
}${ specificKamiReadme || '' }
`