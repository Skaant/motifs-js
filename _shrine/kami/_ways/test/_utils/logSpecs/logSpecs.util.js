import formatAssertions from "../formatAssertions/formatAssertions.util.js"

export default (
  id,
  [
    kamiSpecs,
    instancesSpecs
  ],
  {
    ran,
    kos
  }) => {

    console.log('\n-----\nKAMI `' + id + '`\n')
    console.log('Tests ran : ' + ran + '.\n')

    kamiSpecs
      ? console.log('Specific SPECS :\n'
        + kamiSpecs.map(formatAssertions)
          .join('\n')
        + '\n')

      : console.log('*No specific SPECS.*')
    
    instancesSpecs
      ? console.log('Instances SPECS :\n'
        + instancesSpecs.map(({ id, specs }) =>
          
          '\n"' + id + '" instance\n\n'
            + specs.map(formatAssertions)
              .join('\n'))
          .join('\n'))

      : console.log('*No instances SPECS.*')

    console.log('\nFailed tests : ' + kos.length
      + '/' + ran + '.')
  }