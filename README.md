*[16 KAMIS](#kamis-glossary)
on 9/14/2020, 12:10:23 PM*

# kami.js

> Work on ideas.

![kami.js project pictogram](/logo.svg)

`kami.js` aims to explore the concepts of
**patterns and naming**.

You create virtual entities, [KAMIS](#kami),
to embody projects' classes, components and logic.

Quickly, it starts to **form a language** that
you can use to communicate with your collaborators.

### Table of content

* [What is `kami.js` ?](#what-is-kami-js)
* [How to use `kami.js` ?](#how-to-use-kami-js)
* [KAMIS glossary](#kamis-glossary)

## What is `kami.js` ?

`kami.js` exposes a set of features which
help managing complexity in projects.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
it helps organization to exponentially increase the
value of conception and development works.

### Project's keystone

Everything in `kami.js` is based on **words**.

**Words and their relations.**

[KAMIS](#kami) are words, in a context.

By connecting them, you create powerful
softwares, databases and knowledges.

Strongly implementing the DRY principle,
when you want to describes a property,
there is a high chance that the words you
use are already defined in the glossary and
implemented by the framework's and/or you
codebase.

### Different ways of connecting KAMIS

1. Import a KAMI as an ESM module and
consumes its features.

```javascript
/** ./dev-start.js */
import KAMI from './index.js'

KAMI.ave(
  import.meta.url,
  {
    log: true
  })
```

2. *(not implemented yet)* Describe
it with a relation property.

### List of features

1. Glossary

By retrieving the formalized concepts
of your projects, ie. built-in and
customized [KAMIS](#kamis),
you are able to create glossaries on
all your documentation platforms :
README, wiki, website.

*[Jump to README KAMIS' glossary section](#kamis-glossary).*

2. Documentation

After retrieving, you can conditionaly shape
and render concepts that your project manipulate
in order to create relevant views for different
users and uses.

3. Test

Check KAMIS instances and logics against
their specifications.

4. Continuous deployment

Plug framework's features to CI/CD pipelines
through CLI commands.

## How to use `kami.js` ?

### Create a new KAMI

```bash
npm start -- create <scope : '' | ...> <kamiId: string>
```

Creates a new [KAMI](#kami) folders/files tree
at given scope, structured as follow :

```bash
<scope>
+-- /_shrine/
|   +-- <kamiId>
|   |   +-- _props
|   |   |   +-- names
|   |   |   |   +-- names.prop.js
|   |   |   +-- description
|   |   |   |   +-- description.prop.js
|   +-- <kamiId>.kami.js
```

#### Notes
* `names.prop.js` and `description.prop.js` are
pre-filled with temporary values.

You'll have to customize them through your IDE.

### Test the framework

```bash
npm start -- [-log] test
```

#### Notes
* `-log` prints all test assertions and results.

### Build the README

```bash
npm start -- -k readme build
```

#### Notes
* `-k` targets a specific [KAMI](#kami),
in this case [README](#readme),
* `build` is targeting the
README "build" [COMMAND](#command).

## KAMIS' glossary
    
* [`kami`](#kami), *KAMI-KAMI*, Concept, Idea, Word, Pattern, Spirit, God
* [`command`](#kami), *COMMAND-KAMI*, Command
* [`doc`](#kami), *DOC-KAMI*, Documentation
* [`file`](#kami), *FILE-KAMI*, File
* [`folder`](#kami), *FOLDER-KAMI*, Folder
* [`instance`](#kami), *INSTANCE-KAMI*, Instance
* [`lang`](#kami), *LANG-KAMI*, Language
* [`prop`](#kami), *PROP-KAMI*, Property
* [`readme`](#kami), *README-KAMI*, README
* [`section`](#kami), *SECTION-KAMI*, Section
* [`shrine`](#kami), *ШRᛏGHN-KAMI*, Shrine
* [`spec`](#kami), *SPEC-KAMI*, Specification
* [`util`](#kami), *UTIL-KAMI*, Utility
* [`way`](#kami), *WAY-KAMI*, Method
* [`website`](#kami), *WEBSITE-KAMI*, Website
* [`wiki`](#kami), *WIKI-KAMI*, Wiki