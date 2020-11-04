export default `## How to use \`motifs\` ?

Here are details some [COMMANDS](#command),
framework's CLI entrypoints.

### Create a new MOTIF

\`\`\`bash
npm start -- create <scope : '' | ...> <motifId: string>
\`\`\`

Creates a new [MOTIF](#motif) folders/files tree
at given scope, structured as follow :

\`\`\`bash
<scope>
+-- /_shrine/
|   +-- <motifId>
|   |   +-- _props
|   |   |   +-- names
|   |   |   |   +-- names.prop.js
|   |   |   +-- description
|   |   |   |   +-- description.prop.js
|   +-- <motifId>.motif.js
\`\`\`

#### Notes
* \`names.prop.js\` and \`description.prop.js\` are
pre-filled with temporary values.

You'll have to customize them through your IDE.

### Test the framework

\`\`\`bash
npm start -- [-log] test
\`\`\`

#### Notes
* \`-log\` prints all test assertions and results.

### Build the README

\`\`\`bash
npm start -- -k readme build
\`\`\`

#### Notes
* \`-k\` targets a specific [KAMI](#kami),
in this case [README](#readme),
* \`build\` is targeting the
README "build" [COMMAND](#command).

### Build a WEBSITE

\`\`\`bash
npm start -- -k website build
\`\`\`
`