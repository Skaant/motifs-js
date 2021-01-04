import { EXCLUDE, INCLUDE } from "./_utils/getFiles/_enums/rules/rules.enum.js";

export default {
  '_build': EXCLUDE,
  '_tests': EXCLUDE,
  '.vscode': EXCLUDE,
  'node_modules': {
    rule: EXCLUDE,
    subs: {
      'motifs-js': INCLUDE
    }
  },
  'package-lock.json': EXCLUDE,

  /* Git features unused for now */
  '.git': EXCLUDE,
  '.github': EXCLUDE,
  '.gitignore': EXCLUDE,
}