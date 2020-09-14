export default `## How to use \`kami.js\` ?

### Create a new KAMI

\`\`\`bash
npm start -- create <scope : '' | ...> <kamiId: string>
\`\`\`

Creates a new [KAMI](#kami) folders/files tree
at given scope, structured as follow :

\`\`\`bash
<scope>
+-- /_shrine/
|   +-- <kamiId>
|   |   +-- _props
|   |   |   +-- names
|   |   |   |   +-- names.prop.js
|   |   |   +-- description
|   |   |   |   +-- description.prop.js
|   +-- <kamiId>.kami.js
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
README "build" [COMMAND](#command).`