import motifJs from './index.js'

const MOTIF = motifJs({ log: true })

MOTIF.cli(process.argv.slice(3), { log: true })