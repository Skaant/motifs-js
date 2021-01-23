export default `## What is \`motifs-js\` ?

\`motifs-js\` exposes a set of features which
help managing complexity in projects,
specifically website development.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
**it helps organizations to exponentially increase the
value of conception and development works**.

### Words and their relations

[MOTIFS](#motif) starting point is their name
(or to be more exact, their unique contextual
[\`id\`](#id) property).

**Like words define themselves by their relations
with other words, MOTIFS are put together to
shape a language.**

This language can be extended in any consumer
project, by simply adding new local custom MOTIFS.

> See how to [*create a new MOTIF*](#create-a-new-motif).

Connecting them allows your team to create powerful
softwares, databases and knowledges.

### Different ways of connecting MOTIFS

1. Statically import a MOTIF as an
ESM module and consume its features.

  Example :
  \`\`\`javascript
  import MOTIF from "motifs-js/_motif/motif/motif.motif.js"

  MOTIF.init(url, options)
  \`\`\`

2. Dynamically import a MOTIF using the
\`MOTIF.get()\` method

  Example :
  \`\`\`javascript
  import MOTIF from "motifs-js/_motif/motif/motif.motif.js"

  const motifs = await MOTIF.get()
  \`\`\`

3. *(not implemented)* MOTIFS' RELATION.

### Features

#### 1. Static website builder

For now, the main application for the
\`motifs-js\` is building [WEBSITES](#website)'
folders and files tree.

> See how to [*build*](#build-a-website) and
[locally serve a WEBSITE](#serve-a-website).

#### 2. Development utilities

MOTIFS abstract a lot of developement patterns
and can be used to manipulate occurences
of the concept they describe.

Some of the most common MOTIFS :
* [INSTANCE](#instance),
* [FILE](#file),
* [FOLDER](#folder),
* [OCCURENCE](#occurence),
* [SPEC](#spec).

#### 3. Glossary

By retrieving the formalized concepts
of your projects (built-in and customized MOTIFS),
you are able to create glossaries on
all your documentation platforms :
[README](#readme), wiki, [WEBSITE](#website).

> See how to [build the README](#build-the-readme).

*[Jump to MOTIFS' glossary section](#motifs-glossary).*

#### 4. Documentation

After retrieving, you can conditionaly shape
and render MOTIFS that your project manipulates
in order to create relevant views for different
users and uses.

#### 5. Test

Check MOTIFS instances and logics against
their specification, using the [SPEC](#spec)
framework.

> See how to [*Test the framework and project*](#test-the-framework-and-project).

#### 6. Continuous deployment

Plug framework's features to CI/CD pipelines
through CLI [COMMANDS](#command).
`