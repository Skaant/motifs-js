import langEnum from "../../../lang/_enums/lang.enum.js";
import PANTHEON from "../../../pantheon/pantheon.kami.js";

export default kamis => 

  new Promise(resolve =>

    resolve(
`## KAMIS' glossary
    
${
  kamis.map(kami =>
    `${
        kami.parents
          ? kami.parents.filter(parentId =>

              parentId !== PANTHEON.id)
            .map(() => '\n  ').join('')
          : ''
    }* [${
      (kami.parents
        ? (kami.parents
            .map(parentId => {
          
              const parent = kamis.find(kami =>
                
                kami.id === parentId)

              return parent.id === PANTHEON.id
                ? '\*-'
                
                : (parent.names[langEnum.ABS] + '-')
            }).join(''))
        : '')
        + kami.names[langEnum.ABS]
    }](#${
      (kami.parents
        ? (kami.parents.map(parentId =>
          
          parentId === PANTHEON.id
            ? ''
            
            : parentId).join('-') + '-')
        : '')
        + kami.id
    }) : ${
      typeof kami.names[langEnum.EN] === 'string'
        ? kami.names[langEnum.EN]
        : kami.names[langEnum.EN].join(', ')
    }`
  )
    .join('\n')
}`
    ))