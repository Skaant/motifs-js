import KAMI from "../../kami.kami.js"

export default args => {

  const options = {
    kami: KAMI.id,
    command: false,
    log: false,
    params: []
  }
  let _args = [ ...args ]

  while (_args[0] !== undefined) {

    const arg = _args.shift()

    if (arg[0] === '-') {

      switch (arg.slice(1)) {

        case 'k':

          options.kami = _args.shift()
          break

        case 'log':

          options.log = true
          break

        case 'doc':

          options.doc = true
          break
      }
    } else {

      if (!options.command) {

        options.command = arg
      
      } else {

        options.params.push(arg)
      }
    }
  }

  KAMI.get()
    .then(kamis => {
      
      const kami = kamis.find(kami =>
        kami.id === options.kami)

      if (!kami)
        throw new Error('No KAMI "'
          + options.kami + '"')

      if (!kami._commands)
        throw new Error('No `_commands` prop for kami "'
          + options.kami + '"')

      if (!kami._commands[options.command])
        throw new Error('No command "'
          + options.command + '" for kami "'
          + options.kami + '"')

      kami._commands[options.command](
        {
          log: options.log,
          doc: options.doc
        },
        ...options.params)
    })
}