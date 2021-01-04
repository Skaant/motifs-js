import MOTIF from "../../motif.motif.js"

export default (args, { log = false }) => {

  log && console.log('\nYou did send a command to me :')

  const options = {
    motif: MOTIF.id,
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

          options.motif = _args.shift()
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
    .then(motifs => {
      
      const motif = motifs.find(motif =>
        motif.id === options.motif)

      if (!motif)
        throw new Error('No MOTIF "'
          + options.motif + '"')

      if (!motif._commands)
        throw new Error('No `_commands` prop for MOTIF "'
          + options.motif + '"')

      if (!motif._commands[options.command])
        throw new Error('No command "'
          + options.command + '" for MOTIF "'
          + options.motif + '"')

      log && console.log('"' + options.command + '"\n')

      try {

        motif._commands[options.command](
          params,
          options
        )

      } catch (err) {

        console.error(err)
      }
    })
}