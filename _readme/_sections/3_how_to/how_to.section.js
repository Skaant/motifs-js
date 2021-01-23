export default `## How to use \`motifs-js\` ?

List of tutorials :
* [Installation](#installation),
* [Create a new MOTIF](#create-a-new-motif),
* [Test the framework and project](#test-the-framework-and-project),
* [Build the README](#build-the-readme)
* [Build a WEBSITE](#build-a-website)
* [Serve the WEBSITE locally](#serve-the-website-locally)
* [Common \`package.json\` sripts binding](#common-packagejson-sripts-binding)

### Installation

First, install the \`motifs-js\` package in your project :

\`\`\`bash
npm i motifs-js
\`\`\`

Then, the common use case is to create an \`index.js\` file
at the project root.
Content should be as follow :

\`\`\`javascript
import motifJs from 'motifs-js/index.js'

const MOTIF = motifJs(import.meta.url, { log: true })

MOTIF.cli(process.argv.slice(3), { log: true })
\`\`\`

On the second line, MOTIF MOTIF is retrieved through
its "constructor", which in fact
black-box \`init\` process.

The third line allows the \`motifs-js\` CLI
to be ran using a \`package.json\` binding :

\`\`\`json
"scripts": {
  "start": "node index.js --"
}
\`\`\`

Resulting in :
\`\`\`bash
npm start -- -log test
\`\`\`

### Create a new MOTIF

\`\`\`bash
npm start -- create <scope : '' | '...'> <motifId: string>
\`\`\`

Creates a new [MOTIF](#motif) folders/files tree
at given scope, structured as follow :

\`\`\`bash
<scope>
+-- _motifs/
|   +-- description
|   |   description.md
|   +-- <motifId>.motif.js
\`\`\`

Same-scope MOTIFS are put in a \`_motifs\` folder.

\`description\` is provisionned in \`MOTIF.get()\` method
to be filled.

The \`<motifsId>.motifs.js\` file holds a \`names\` property
to be filled too.

**There will be bound other new MOTIF's property.**

See an example of a \`.motifs.js\` file
([\`website-folder.motif.js\`](https://github.com/Skaant/motifs-js/blob/master/_motifs/website-folder/website-folder.motif.js)) :

\`\`\`javascript
import { EN, FR } from '../lang/_enums/lang.enum.js'
import shape from './shape/shape.js'
import build from './build/build.js'
import create from './create/create.js'

export default {
  id: 'website-page',
  names: {
    [EN]: 'Page de site',
    [FR]: 'Website page'
  },
  shape,
  build,
  create
}
\`\`\`

#### Notes
* \`names.prop.js\` and \`description.prop.js\` are
pre-filled with temporary values.

You'll have to customize them through your IDE.

### Test the framework and project

\`\`\`bash
npm start -- [-log] test
\`\`\`

Retrieves all files matching the [SPEC](#spec)
[OCCURENCES](#occurences), and execute their content.

#### Notes
* \`-log\` prints all test assertions and results.

### Build the README

\`\`\`bash
npm start -- -motif readme build
\`\`\`

#### Notes
* \`-motif\` ou \`-m\` targets a specific [MOTIF](#motif)
(in this case [README](#readme)),
* \`build\` is targeting the
README "build" [COMMAND](#command).

### Build a WEBSITE

\`\`\`bash
npm start -- -m website build <websiteId:string>
\`\`\`

Build the [WEBSITE](#website) around
identified \`<websiteId>.website.js\` file.

#### Notes
CLI currently doesn't support \`WEBSITE.build()\`
\`{ scope, dest }\` options configuration.

### Serve the WEBSITE locally

The same way you build your WEBSITE you
can serve it locally using the following command :

\`\`\`bash
npm start -- -m website serve <websiteId:string>
\`\`\`

Command starts a mini-Express application
to delivers static content.

### Common package.json sripts binding

Here is the common shape of \`package.json\`'s
\`scripts\` property :

\`\`\`json
"scripts": {
  "start": "node index.js --",
  "test": "npm start -- -log test",
  "readme": "npm start -- -m readme -log build",
  "website": "npm start -- -m website -log build en",
  "serve": "npm start -- -m website -log serve en"
}
\`\`\`

Now you can run commands like :
\`\`\`bash
npm test
npm run website
npm run serve
\`\`\`
`