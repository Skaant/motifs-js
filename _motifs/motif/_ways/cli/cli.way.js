import MOTIF from "../../motif.motif.js"

export default (args, { log = false }) => {

  log && console.log('\nYou did send a command to me :')

  const options = {
    kami: MOTIF.id,
    command: false,
    log: false,
    force: false,
    params: []
  }
  const params = []
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

        case 'force':

          options.force = true
          break
      }
    } else {

      if (!options.command) {

        options.command = arg
      
      } else {

        params.push(arg)
      }
    }
  }

  MOTIF.get()
    .then(kamis => {
      
      const kami = kamis.find(kami =>
        kami.id === options.kami)

      if (!kami)
        throw new Error('No MOTIF "'
          + options.kami + '"')

      if (!kami._commands)
        throw new Error('No `_commands` prop for MOTIF "'
          + options.kami + '"')

      if (!kami._commands[options.command])
        throw new Error('No command "'
          + options.command + '" for MOTIF "'
          + options.kami + '"')

      log && console.log('"' + options.command + '"\n')

      try {

        kami._commands[options.command](
          params,
          options
        )

      } catch (err) {

        console.error(err)
      }
    })
}