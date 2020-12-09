import KAMI from './index.js'
import SPEC from './_motifs/spec/spec.motif.js'

KAMI.ave(
  import.meta.url,
  {
    log: true
  })

SPEC.runAll({ log: true })
  .then(a => console.log(a))


/* KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  }) */