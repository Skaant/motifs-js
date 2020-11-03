export default assertions =>
  
  assertions.map(([ result, label ]) =>
    
    `* ${ result ? 'OK' : 'KO' } : ${ label }`)

    .join('\n')