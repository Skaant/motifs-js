*[32 MOTIFS](#motifs-glossary)
on 1/23/2021, 7:18:37 AM*

![motifs-js project pictogram : a circle (pattern) crossing a square (instance).](/logo.svg)

# motifs-js

> Work on ideas.

### Table of content

* [A generative design patterns framework](#a-generative-design-patterns-framework)
* [What is `motifs-js` ?](#what-is-motifs-js-)
* [How to use `motifs-js` ?](#how-to-use-motifs-js-)
* [MOTIFS glossary](#motifs-glossary)

## A generative design patterns framework

[motifs-js [GitHub]](https://github.com/Skaant/motifs-js) aims to
explore the concepts of **naming as well as[generative design patterns](https://www.researchgate.net/publication/3981737_Generative_design_patterns)**.

**Its current applications are :**
* Static website building (see [WEBSITE MOTIF](#website)),
* Documentation building (see [README MOTIF](#readme)),
* Unit-testing (see [SPEC MOTIF](#spec)).

### MOTIFS (patterns)

Framework's **conceptual entities**, [MOTIFS](#motif),
let you embody projects' classes, components and logic.

> Learn more about MOTIFS in
the [*What is `motifs-js` ?* section](#what-is-motifs-js-).

Quickly, **they start to form a language** that you can use
to build your applications and
to share with your collaborators.

> Learn more about `motifs-js` usage in the
[*How to use `motifs-js` ?* section](#how-to-use-motifs-js-).

### Browse some websites built on `MOTIFS`

* My profesional website, [rimarok.com](https://rimarok.com),
* My creative hub, [imrok.fr](https://imrok.fr),
* A poetic artwork (in progress), [highbs-bok.art](https://highbs-bok.art),
* And even the [`motifs-js` documentation website](https://motifs-js-website.vercel.app) !


## What is `motifs-js` ?

`motifs-js` exposes a set of features which
help managing complexity in projects,
specifically website development.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
**it helps organizations to exponentially increase the
value of conception and development works**.

### Words and their relations

[MOTIFS](#motif) starting point is their name
(or to be more exact, their unique contextual
[`id`](#id) property).

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
  ```javascript
  import MOTIF from "motifs-js/_motif/motif/motif.motif.js"

  MOTIF.init(url, options)
  ```

2. Dynamically import a MOTIF using the
`MOTIF.get()` method

  Example :
  ```javascript
  import MOTIF from "motifs-js/_motif/motif/motif.motif.js"

  const motifs = await MOTIF.get()
  ```

3. *(not implemented)* MOTIFS' RELATION.

### Features

#### 1. Static website builder

For now, the main application for the
`motifs-js` is building [WEBSITES](#website)'
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


## How to use `motifs-js` ?

List of tutorials :
* [Installation](#installation),
* [Create a new MOTIF](#create-a-new-motif),
* [Test the framework and project](#test-the-framework-and-project),
* [Build the README](#build-the-readme)
* [Build a WEBSITE](#build-a-website)
* [Serve the WEBSITE locally](#serve-the-website-locally)
* [Common `package.json` sripts binding](#common-packagejson-sripts-binding)

### Installation

First, install the `motifs-js` package in your project :

```bash
npm i motifs-js
```

Then, the common use case is to create an `index.js` file
at the project root.
Content should be as follow :

```javascript
import motifJs from 'motifs-js/index.js'

const MOTIF = motifJs(import.meta.url, { log: true })

MOTIF.cli(process.argv.slice(3), { log: true })
```

On the second line, MOTIF MOTIF is retrieved through
its "constructor", which in fact
black-box `init` process.

The third line allows the `motifs-js` CLI
to be ran using a `package.json` binding :

```json
"scripts": {
  "start": "node index.js --"
}
```

Resulting in :
```bash
npm start -- -log test
```

### Create a new MOTIF

```bash
npm start -- create <scope : '' | '...'> <motifId: string>
```

Creates a new [MOTIF](#motif) folders/files tree
at given scope, structured as follow :

```bash
<scope>
+-- _motifs/
|   +-- description
|   |   description.md
|   +-- <motifId>.motif.js
```

Same-scope MOTIFS are put in a `_motifs` folder.

`description` is provisionned in `MOTIF.get()` method
to be filled.

The `<motifsId>.motifs.js` file holds a `names` property
to be filled too.

**There will be bound other new MOTIF's property.**

See an example of a `.motifs.js` file
([`website-folder.motif.js`](https://github.com/Skaant/motifs-js/blob/master/_motifs/website-folder/website-folder.motif.js)) :

```javascript
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
```

#### Notes
* `names.prop.js` and `description.prop.js` are
pre-filled with temporary values.

You'll have to customize them through your IDE.

### Test the framework and project

```bash
npm start -- [-log] test
```

Retrieves all files matching the [SPEC](#spec)
[OCCURENCES](#occurences), and execute their content.

#### Notes
* `-log` prints all test assertions and results.

### Build the README

```bash
npm start -- -motif readme build
```

#### Notes
* `-motif` ou `-m` targets a specific [MOTIF](#motif)
(in this case [README](#readme)),
* `build` is targeting the
README "build" [COMMAND](#command).

### Build a WEBSITE

```bash
npm start -- -m website build <websiteId:string>
```

Build the [WEBSITE](#website) around
identified `<websiteId>.website.js` file.

#### Notes
CLI currently doesn't support `WEBSITE.build()`
`{ scope, dest }` options configuration.

### Serve the WEBSITE locally

The same way you build your WEBSITE you
can serve it locally using the following command :

```bash
npm start -- -m website serve <websiteId:string>
```

Command starts a mini-Express application
to delivers static content.

### Common package.json sripts binding

Here is the common shape of `package.json`'s
`scripts` property :

```json
"scripts": {
  "start": "node index.js --",
  "test": "npm start -- -log test",
  "readme": "npm start -- -m readme -log build",
  "website": "npm start -- -m website -log build en",
  "serve": "npm start -- -m website -log serve en"
}
```

Now you can run commands like :
```bash
npm test
npm run website
npm run serve
```


## MOTIFS' glossary
    
* [`article`](#article) : Article
* ▥ [`book`](#book) : Book
* [`book-extract`](#book-extract) : Extract, Fragment, Atom
* [`book-image`](#book-image) : Image, Picture, Illustration, Scan
* [`book-page`](#book-page) : Page
* [`book-section`](#book-section) : Section, Chapter, Part
* ⌿ [`command`](#command) : Command
* ▼ [`description`](#description) : Description
* ⎊ [`doc`](#doc) : Documentation
* ▤ [`file`](#file) : File
* ◰ [`folder`](#folder) : Folder
* [`folder-scope`](#folder-scope) : Scope, Perimeter
* ⤶ [`get`](#get) : Accesser, Obtain, Hydrater
* ⯎ [`global`](#global) : Identifier, instance name
* ⚲ [`id`](#id) : Identifier, instance name
* ⧇ [`instance`](#instance) : Instance
* ἀ [`lang`](#lang) : Language
* ⚇ [`motif`](#motif) : Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva
* ʯ [`occurence`](#occurence) : Occurence
* Ω [`project`](#project) : Project
* ⁖ [`prop`](#prop) : Property, Characteristics, Attribute
* ⬙ [`readme`](#readme) : README
* ⬥ [`readme-section`](#readme-section) : Section
* Ѭ [`spec`](#spec) : Specification
* Ѫ [`spec-section`](#spec-section) : Specification section
* ⬫ [`util`](#util) : Utility
* [`way`](#way) : Method, Action, Operation, Function
* [`webapp`](#webapp) : Web application
* Ʋ [`website`](#website) : Website
* [`website-folder`](#website-folder) : Website folder
* [`website-page`](#website-page) : Page de site
* [`wiki`](#wiki) : Wiki

# `article`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] article**, also known as :

* [EN] Article,
* [FR] Article.

**WEBSITE ARTICLE**

An article is a titled and dated content,
with optional tags and meta-data.

## Properties

* `motif` : motif
* `path` : /_motifs/article/article.motif.js
* `id` : article
* `scope` : 
* `folder` : article
* `filePath` : /_motifs/article/article.motif.js
* `names`
* `occurences`
* `get`
* `_commands`

## Instances

**Count : 0.**

### Matching mechanims

* `/.*_data\/articles\/(\d*)\/(\d*).article.js/`.

### Instances list




# `book`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▥ [id] book**, also known as :

* [EN] Book,
* [FR] Livre.

**ORDERED COLLECTION OF WRITINGS**

A BOOK content is made of smaller [KAMIS](#kami)/bricks :

* [BOOK-SECTIONS](#book-section),
  which split BOOK content in chapters or sub-sections;
  
* [BOOK-PAGES](#book-page),
  actually representing a scanned sheet of paper,
  but could also hold expected BOOK page outcome;
  
* [BOOK-EXTRACTS](#book-extract),
  which hold an atomic fragment of BOOK content.
  
**Note that BOOK is a top-level section
with just some specific meta-data.**

## Properties

* `motif` : motif
* `path` : /_motifs/book/book.motif.js
* `id` : book
* `scope` : 
* `folder` : book
* `filePath` : /_motifs/book/book.motif.js
* `symbol` : ▥
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 0.**

### Matching mechanims

* `/^\/_data(.*)\/([\w|\-]*)\/([\w|\-]*)\.book\.js/`.

### Instances list




# `book-extract`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-extract**, also known as :

* [EN] Extract, Fragment, Atom,
* [FR] Extrait, Fragment, Atome.

A small piece of BOOK

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

## Properties

* `motif` : motif
* `path` : /_motifs/book-extract/book-extract.motif.js
* `id` : book-extract
* `scope` : 
* `folder` : book-extract
* `filePath` : /_motifs/book-extract/book-extract.motif.js
* `names`
* `occurences`

## Instances

**Count : 0.**

### Matching mechanims

* `/(.*)\/_extracts\/([\w|\-]*)\/([\w|\-]*)\.extract\.js/`.

### Instances list




# `book-image`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-image**, also known as :

* [EN] Image, Picture, Illustration, Scan,
* [FR] Image, Illustration, Numérisation.

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

## Accepted formats

For now, only the following formats can be retrieved using this MOTIF :
* `jpg`,
* `png`,
* `svg`.

**And, only files in the root `_data` folder.**

See the MOTIF OCCURENCE for details.

## Properties

* `motif` : motif
* `path` : /_motifs/book-image/book-image.motif.js
* `id` : book-image
* `scope` : 
* `folder` : book-image
* `filePath` : /_motifs/book-image/book-image.motif.js
* `names`
* `occurences`
* `copy`

## Instances

**Count : 0.**

### Matching mechanims

* `/.*_data\/(.*)\/([\w|\-]*)\.(png|jpg|svg)$/`.

### Instances list




# `book-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-page**, also known as :

* [EN] Page,
* [FR] Page.

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

## Properties

* `motif` : motif
* `path` : /_motifs/book-page/book-page.motif.js
* `id` : book-page
* `scope` : 
* `folder` : book-page
* `filePath` : /_motifs/book-page/book-page.motif.js
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 0.**

### Matching mechanims

* `/(.*)\/_pages\/([\w|\-]*)\/([\w|\-]*)\.page\.js/`.

### Instances list




# `book-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-section**, also known as :

* [EN] Section, Chapter, Part,
* [FR] Section, Chapitre, Partie.

**BOOK SUB-DIVISION**

## Properties

* `motif` : motif
* `path` : /_motifs/book-section/book-section.motif.js
* `id` : book-section
* `scope` : 
* `folder` : book-section
* `filePath` : /_motifs/book-section/book-section.motif.js
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 0.**

### Matching mechanims

.

### Instances list




# `command`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⌿ [id] command**, also known as :

* [EN] Command,
* [FR] Commande.

MOTIF CLI interface action

Basically, a command **binds a method to match a MOTIF [entrypoint syntax](#entrypoint-syntax)**.

At the moment, CLI is only accessible as a single line command prompt;
but we'd like to present it as a interactive, staying alive, dialog.

### Entrypoint syntax

In the `./dev-start` file you can find the following call :

```javascript
KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  })
```

**From the CLI side**, when you write a command, note that **the three first words are ignored**.
Use the following syntax to call a COMMAND.

```bash
node dev-start.js -- <args>
npm start -- <args>
```

**In the code side**, the signature for a COMMAND function is
quite similar to the top-level `KAMI.cli()` method :

```javascript
export default (args: [], options: {}) =>
```

## Properties

* `motif` : motif
* `path` : /_motifs/command/command.motif.js
* `id` : command
* `scope` : 
* `folder` : command
* `filePath` : /_motifs/command/command.motif.js
* `symbol` : ⌿
* `names`
* `occurences`

## Instances

**Count : 0.**

### Matching mechanims

* `/(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/`.

### Instances list




# `description`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▼ [id] description**, also known as :

* [EN] Description,
* [FR] Description.

Textual data

Should treat LANG dimension.

Experimental :
```bash
<motifId>
+-- description
|   +-- en.description.js
|   +-- fr.description.js
+-- <motifId>.motif.js
```

## Properties

* `motif` : motif
* `path` : /_motifs/description/description.motif.js
* `id` : description
* `scope` : 
* `folder` : description
* `filePath` : /_motifs/description/description.motif.js
* `symbol` : ▼
* `names`
* `occurences`

## Instances

**Count : 11.**

### Matching mechanims

* `/(.*)\/([\w|\-]*)\/description\/description\.md$/`.

### Instances list

* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)


# `doc`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⎊ [id] doc**, also known as :

* [EN] Documentation,
* [FR] Documentation.

General documentation ressources

DOC is composed of few sub-[MOTIFS](#motif) :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

## Properties

* `motif` : motif
* `path` : /_motifs/doc/doc.motif.js
* `id` : doc
* `scope` : 
* `folder` : doc
* `filePath` : /_motifs/doc/doc.motif.js
* `symbol` : ⎊
* `names`


# `file`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▤ [id] file**, also known as :

* [EN] File,
* [FR] Fichier.

File meta-data

*Pattern should later be extended depending on
the file extension.*

## Properties

* `motif` : motif
* `path` : /_motifs/file/file.motif.js
* `id` : file
* `scope` : 
* `folder` : file
* `filePath` : /_motifs/file/file.motif.js
* `symbol` : ▤
* `names`
* `create`
* `get`
* `copy`


# `folder`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**◰ [id] folder**, also known as :

* [EN] Folder,
* [FR] Dossier.

File explorer node

Folder is represented by :
* Its `scope`, the path between project root
  and desired folder location,
* Its `name`, an unique identifier in its scope,
* Its `tree`, an object representing folders and
  files hierarchy inside top-level folder
  (a complex concept to define).


## Properties

* `motif` : motif
* `path` : /_motifs/folder/folder.motif.js
* `id` : folder
* `scope` : 
* `folder` : folder
* `filePath` : /_motifs/folder/folder.motif.js
* `symbol` : ◰
* `names`
* `create`
* `copy`
* `clear`


# `folder-scope`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] folder-scope**, also known as :

* [EN] Scope, Perimeter,
* [FR] Portée, Périmètre.

SUB-FOLDER TREE

In a FS representation, the scope
is the root folder, or a sub-folder.

## Properties

* `motif` : motif
* `path` : /_motifs/folder-scope/folder-scope.motif.js
* `id` : folder-scope
* `scope` : 
* `folder` : folder-scope
* `filePath` : /_motifs/folder-scope/folder-scope.motif.js
* `names`


# `get`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⤶ [id] get**, also known as :

* [EN] Accesser, Obtain, Hydrater,
* [FR] Accesseur, Obtenir, Hydrateur.

The MOTIF'S INSTANCES accessers

GET is currently an abstract pattern
which may be implemented on sufficent
occurence rate and generic logics.

GET can declined on KAMI's occurences purposes :
* Access and update folders and files content,
* Import ESM modules,
* Access and update data from databases.

In any case, an object instance is created to
represent the actual occurence.

In the case of folders and files,
a regular expression is used for matching.

### GET ONE and GET ALL

get(:id) and get()
`

## Properties

* `motif` : motif
* `path` : /_motifs/get/get.motif.js
* `id` : get
* `scope` : 
* `folder` : get
* `filePath` : /_motifs/get/get.motif.js
* `symbol` : ⤶
* `names`
* `regExp`


# `global`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⯎ [id] global**, also known as :

* [EN] Identifier, instance name,
* [FR] Identifieur, nom d'instance.

Global variables to be accessed application-wide

## Properties

* `motif` : motif
* `path` : /_motifs/global/global.motif.js
* `id` : global
* `scope` : 
* `folder` : global
* `filePath` : /_motifs/global/global.motif.js
* `symbol` : ⯎
* `names`


# `id`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⚲ [id] id**, also known as :

* [EN] Identifier, instance name,
* [FR] Identifieur, nom d'instance.

INSTANCE NAME

For a given MOTIF and given SCOPE,
the ID is the unique name of an instance.

It is usually a PROP.

## Properties

* `motif` : motif
* `path` : /_motifs/id/id.motif.js
* `id` : id
* `scope` : 
* `folder` : id
* `filePath` : /_motifs/id/id.motif.js
* `symbol` : ⚲
* `names`


# `instance`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⧇ [id] instance**, also known as :

* [EN] Instance,
* [FR] Instance.

INDIVIDUAL OF ONE OR MULTIPLE MOTIFS

Instances are occurence of a [MOTIF](#motif).

They should conform to the following specifications :

* Can be retrieved through [`<motif>.get`] way,
* Can be created through [`<motif>.create`] way,
* Can be tested through [`<motif>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[MOTIF](#motif) (`<...>.motif.js`) are instances of the MOTIF MOTIF.

Note that **MOTIF MOTIF is an instance of itself !**

## Properties

* `motif` : motif
* `path` : /_motifs/instance/instance.motif.js
* `id` : instance
* `scope` : 
* `folder` : instance
* `filePath` : /_motifs/instance/instance.motif.js
* `symbol` : ⧇
* `names`
* `get`


# `lang`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ἀ [id] lang**, also known as :

* [EN] Language,
* [FR] Langage.

## Properties

* `motif` : motif
* `path` : /_motifs/lang/lang.motif.js
* `id` : lang
* `scope` : 
* `folder` : lang
* `filePath` : /_motifs/lang/lang.motif.js
* `symbol` : ἀ
* `names`


# `motif`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⚇ [id] motif**, also known as :

* [EN] Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva,
* [FR] Concept, Idée, Mot, Motif, Esprit, Dieu, Ange, Deva.

MOTIF of all MOTIFS

### What is a MOTIF ?

Motif, also known as *pattern*,
is the generic concept that **bind instances together under the same name**.
In programmation, patterns / motifs aim to
solve recurring problems with generic / abstract answers.

As stated in the book [*A Pattern Language*](https://en.wikipedia.org/wiki/A_Pattern_Language),
**motifs also has the property to act as words**, forming sentences (and more) under certains rules.
But, as now stated in the publication [*Generative Design Patterns*](https://www.researchgate.net/publication/3981737_Generative_design_patterns),
*design patterns* in computer science also has the counterpart of being too abstract.
They do not provide implemention and cannot be used straight as operational code.

To address this void, MOTIFS provides both a library of numerous inedite and differently scaling motifs
and an implementation that **makes these motifs not only descriptive, but also generative**.

### About naming files

MOTIF starts living in a `<motifId>` folder,
just right with its `<motifId>.motif.js` file.

Every MOTIFS has its own rules for naming.

Naming basically bind a **whose ?** (an `<id>.*`, or a [folder scope](/folder-scope))
and a **what ?** (the `*.<motif>.*` it implements).

It remains simple while there is only one *whose* and only one *what*.

But since the are some transversal MOTIFS,
their INSTANCES will potentialy have multiple :

* **whose** : `[ id* ].`,
* **what** : `.[ motif* ].`.



## Properties

* `motif` : motif
* `path` : /_motifs/motif/motif.motif.js
* `id` : motif
* `scope` : 
* `folder` : motif
* `filePath` : /_motifs/motif/motif.motif.js
* `symbol` : ⚇
* `names`
* `occurences`
* `init`
* `flavour` : At the very beginning,
KAMI-KAMI **said itself**, to be
brought to existence.

Soon after, it started to speak out other KAMIS,
which were instantly brought to existence too, following
a pure nodal self-organization.

For the generation to proceed, KAMI-KAMI first had to
split itself in two : the KAMI concept and the
KAMI individual. The class and the instance.

It was also about genericity and specificity.
And, at the end, dualism.

KAMI-KAMI had to become a KAMI like the others KAMIS.
It needed to be processed the same way to ensure
genericity.

But its specifity, the secrets of its generative powers, remained
absent of other KAMIS. This was the key of peace.

By doing so, KAMI-KAMI shared the same common nature,
**the pattern**, to all of its creations [the kamis],
letting them freely **extend and implement** its
highly abstract powers.
* `_commands`
* `create`
* `get`
* `cli`
* `test`

## Instances

**Count : 32.**

### Matching mechanims

* `/(.*)\/_motifs\/([\w|\-]*)\/([\w|\-]*).motif.js/`.

### Instances list

* [`/_motifs/article/article.motif.js`](/_motifs/article/article.motif.js)
* [`/_motifs/book/book.motif.js`](/_motifs/book/book.motif.js)
* [`/_motifs/book-extract/book-extract.motif.js`](/_motifs/book-extract/book-extract.motif.js)
* [`/_motifs/book-image/book-image.motif.js`](/_motifs/book-image/book-image.motif.js)
* [`/_motifs/book-page/book-page.motif.js`](/_motifs/book-page/book-page.motif.js)
* [`/_motifs/book-section/book-section.motif.js`](/_motifs/book-section/book-section.motif.js)
* [`/_motifs/command/command.motif.js`](/_motifs/command/command.motif.js)
* [`/_motifs/description/description.motif.js`](/_motifs/description/description.motif.js)
* [`/_motifs/doc/doc.motif.js`](/_motifs/doc/doc.motif.js)
* [`/_motifs/file/file.motif.js`](/_motifs/file/file.motif.js)
* [`/_motifs/folder/folder.motif.js`](/_motifs/folder/folder.motif.js)
* [`/_motifs/folder-scope/folder-scope.motif.js`](/_motifs/folder-scope/folder-scope.motif.js)
* [`/_motifs/get/get.motif.js`](/_motifs/get/get.motif.js)
* [`/_motifs/global/global.motif.js`](/_motifs/global/global.motif.js)
* [`/_motifs/id/id.motif.js`](/_motifs/id/id.motif.js)
* [`/_motifs/instance/instance.motif.js`](/_motifs/instance/instance.motif.js)
* [`/_motifs/lang/lang.motif.js`](/_motifs/lang/lang.motif.js)
* [`/_motifs/motif/motif.motif.js`](/_motifs/motif/motif.motif.js)
* [`/_motifs/occurence/occurence.motif.js`](/_motifs/occurence/occurence.motif.js)
* [`/_motifs/project/project.motif.js`](/_motifs/project/project.motif.js)
* [`/_motifs/prop/prop.motif.js`](/_motifs/prop/prop.motif.js)
* [`/_motifs/readme/readme.motif.js`](/_motifs/readme/readme.motif.js)
* [`/_motifs/readme-section/readme-section.motif.js`](/_motifs/readme-section/readme-section.motif.js)
* [`/_motifs/spec/spec.motif.js`](/_motifs/spec/spec.motif.js)
* [`/_motifs/spec-section/spec-section.motif.js`](/_motifs/spec-section/spec-section.motif.js)
* [`/_motifs/util/util.motif.js`](/_motifs/util/util.motif.js)
* [`/_motifs/way/way.motif.js`](/_motifs/way/way.motif.js)
* [`/_motifs/webapp/webapp.motif.js`](/_motifs/webapp/webapp.motif.js)
* [`/_motifs/website/website.motif.js`](/_motifs/website/website.motif.js)
* [`/_motifs/website-folder/website-folder.motif.js`](/_motifs/website-folder/website-folder.motif.js)
* [`/_motifs/website-page/website-page.motif.js`](/_motifs/website-page/website-page.motif.js)
* [`/_motifs/wiki/wiki.motif.js`](/_motifs/wiki/wiki.motif.js)

## Flavour

At the very beginning,
KAMI-KAMI **said itself**, to be
brought to existence.

Soon after, it started to speak out other KAMIS,
which were instantly brought to existence too, following
a pure nodal self-organization.

For the generation to proceed, KAMI-KAMI first had to
split itself in two : the KAMI concept and the
KAMI individual. The class and the instance.

It was also about genericity and specificity.
And, at the end, dualism.

KAMI-KAMI had to become a KAMI like the others KAMIS.
It needed to be processed the same way to ensure
genericity.

But its specifity, the secrets of its generative powers, remained
absent of other KAMIS. This was the key of peace.

By doing so, KAMI-KAMI shared the same common nature,
**the pattern**, to all of its creations [the kamis],
letting them freely **extend and implement** its
highly abstract powers.


# `occurence`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ʯ [id] occurence**, also known as :

* [EN] Occurence,
* [FR] Occurence.

WHERE INSTANCES HAPPEN

OCCURENCE is made of two aspects :

1. The **matching rule(s)** define(s) the lexical conditions
   required for a MOTIF'S INSTANCE to appear,

2. The **transformations**, returned by applying the
   `transform` method to every rules matching results.

Experimental :
```javascript
occurences: [
  {
    level: //,
    regExp: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
    folderMatch: //,
    fileMatch: //,
    propMatch: //,
    transform: ([ scope, folderName, fileName ]) => ({
      scope,
      folderName,
      fileName
    })
  }
]
```

## Properties

* `motif` : motif
* `path` : /_motifs/occurence/occurence.motif.js
* `id` : occurence
* `scope` : 
* `folder` : occurence
* `filePath` : /_motifs/occurence/occurence.motif.js
* `symbol` : ʯ
* `names`
* `get`


# `project`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ω [id] project**, also known as :

* [EN] Project,
* [FR] Projet.

Hold whole's meta-data and config

PROJECT agregates different concepts and files related to 
the codebase considered as a whole.

A non-exhaustive list of its components :

* Global DESCRIPTION,
* ENVIRONMENT variables,
* The set of project-related files :
  * `package.json`,
  * `.gitignore`;
* And by extension, all folder and files contained in it.

## Properties

* `motif` : motif
* `path` : /_motifs/project/project.motif.js
* `id` : project
* `scope` : 
* `folder` : project
* `filePath` : /_motifs/project/project.motif.js
* `symbol` : Ω
* `names`


# `prop`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⁖ [id] prop**, also known as :

* [EN] Property, Characteristics, Attribute,
* [FR] Propriété, Caractéristque, Attribut.

Properties of an instance

PROPS can be hard-bounded in `.motif.js` file
or dynamically bound in `MOTIF.get()` method.

*(historical) `_props` folders contains
[kami](#kami)'s properties content.*

## Properties

* `motif` : motif
* `path` : /_motifs/prop/prop.motif.js
* `id` : prop
* `scope` : 
* `folder` : prop
* `filePath` : /_motifs/prop/prop.motif.js
* `symbol` : ⁖
* `names`


# `readme`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬙ [id] readme**, also known as :

* [EN] README,
* [FR] README.

**GITHUB README**

README instance occurs once by [PROJECT](#project),
in the `/_readme folder`.

Specific PROJECT's README [SECTIONS](#sections) are
located in `/_readme/_sections`,
genercis are located in `/kami.js/_shrine/readme/_sections`.

README is a component of [DOC](#-doc).

## Properties

* `motif` : motif
* `path` : /_motifs/readme/readme.motif.js
* `id` : readme
* `scope` : 
* `folder` : readme
* `filePath` : /_motifs/readme/readme.motif.js
* `symbol` : ⬙
* `names`
* `get`
* `build`
* `_commands`


# `readme-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬥ [id] readme-section**, also known as :

* [EN] Section,
* [FR] Section.

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

## Properties

* `motif` : motif
* `path` : /_motifs/readme-section/readme-section.motif.js
* `id` : readme-section
* `scope` : 
* `folder` : readme-section
* `filePath` : /_motifs/readme-section/readme-section.motif.js
* `symbol` : ⬥
* `names`
* `regExp`
* `create`


# `spec`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ѭ [id] spec**, also known as :

* [EN] Specification,
* [FR] Spécification.

MOTIFS' TEST MATERIAL

In `motifs` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a MOTIF (hold by the MOTIF),
* **Specific SPECS**, which target a single
  instance of a MOTIF (hold by the instance).`

## Properties

* `motif` : motif
* `path` : /_motifs/spec/spec.motif.js
* `id` : spec
* `scope` : 
* `folder` : spec
* `filePath` : /_motifs/spec/spec.motif.js
* `symbol` : Ѭ
* `names`
* `runOne`
* `runAll`
* `occurences`

## Instances

**Count : 19.**

### Matching mechanims

* `/(^|.*\/)([\w|\-]*\.spec.js)/`,
* `/(.*)\/_motifs\/([\w|\-]*)\/_specis\/([\w|\-]*)\.speci.js/`.

### Instances list

* [`/index.spec.js`](/index.spec.js)
* [`/_motifs/article/create/create.spec.js`](/_motifs/article/create/create.spec.js)
* [`/_motifs/article/get/get.spec.js`](/_motifs/article/get/get.spec.js)
* [`/_motifs/folder/create/create.spec.js`](/_motifs/folder/create/create.spec.js)
* [`/_motifs/motif/init/init.spec.js`](/_motifs/motif/init/init.spec.js)
* [`/_motifs/motif/init/_utils/getFiles/getFiles.spec.js`](/_motifs/motif/init/_utils/getFiles/getFiles.spec.js)
* [`/_motifs/motif/init/_utils/getFrameworkPath/getFrameworkPath.spec.js`](/_motifs/motif/init/_utils/getFrameworkPath/getFrameworkPath.spec.js)
* [`/_motifs/occurence/get/get.spec.js`](/_motifs/occurence/get/get.spec.js)
* [`/_motifs/occurence/get/_utils/fixSlashFirst/fixSlashFirst.spec.js`](/_motifs/occurence/get/_utils/fixSlashFirst/fixSlashFirst.spec.js)
* [`/_motifs/occurence/get/_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.spec.js`](/_motifs/occurence/get/_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.spec.js)
* [`/_motifs/spec/runAll/_utils/specSectionResultCounter/specSectionResultCounter.spec.js`](/_motifs/spec/runAll/_utils/specSectionResultCounter/specSectionResultCounter.spec.js)
* [`/_motifs/website/build/build.spec.js`](/_motifs/website/build/build.spec.js)
* [`/_motifs/website/get/get.spec.js`](/_motifs/website/get/get.spec.js)
* [`/_motifs/website-folder/build/build.spec.js`](/_motifs/website-folder/build/build.spec.js)
* [`/_motifs/website-folder/shape/shape.spec.js`](/_motifs/website-folder/shape/shape.spec.js)
* [`/_motifs/website-page/build/build.spec.js`](/_motifs/website-page/build/build.spec.js)
* [`/_motifs/website-page/shape/shape.spec.js`](/_motifs/website-page/shape/shape.spec.js)
* [`/_motifs/motif/_specis/motif.speci.js`](/_motifs/motif/_specis/motif.speci.js)
* [`/_motifs/spec/_specis/spec.speci.js`](/_motifs/spec/_specis/spec.speci.js)


# `spec-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ѫ [id] spec-section**, also known as :

* [EN] Specification section,
* [FR] Section de specification.

ASSERTION nodes in SPEC files

```javascript
{
  label: 'string',
  group: [ 'spec-section' | 'assertion' ]
}
```

## Properties

* `motif` : motif
* `path` : /_motifs/spec-section/spec-section.motif.js
* `id` : spec-section
* `scope` : 
* `folder` : spec-section
* `filePath` : /_motifs/spec-section/spec-section.motif.js
* `symbol` : Ѫ
* `names`


# `util`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬫ [id] util**, also known as :

* [EN] Utility,
* [FR] Utilitaire.

The place to put things

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utilities are usually consumed by same scope or 
lower levels modules.

You should avoid repetitions in `_utils` as
everywhere else in the code.


## Properties

* `motif` : motif
* `path` : /_motifs/util/util.motif.js
* `id` : util
* `scope` : 
* `folder` : util
* `filePath` : /_motifs/util/util.motif.js
* `symbol` : ⬫
* `names`


# `way`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] way**, also known as :

* [EN] Method, Action, Operation, Function,
* [FR] Méthode, Action, Opération, Fonction.

(historical) MOTIFS' METHOD

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

## Properties

* `motif` : motif
* `path` : /_motifs/way/way.motif.js
* `id` : way
* `scope` : 
* `folder` : way
* `filePath` : /_motifs/way/way.motif.js
* `names`


# `webapp`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] webapp**, also known as :

* [EN] Web application,
* [FR] Application web.

The dynamic WEBSITE backend

A webapp exposes MOTIFS and their operations
(customs and generics) as endpoints.

## Properties

* `motif` : motif
* `path` : /_motifs/webapp/webapp.motif.js
* `id` : webapp
* `scope` : 
* `folder` : webapp
* `filePath` : /_motifs/webapp/webapp.motif.js
* `names`


# `website`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ʋ [id] website**, also known as :

* [EN] Website,
* [FR] Site internet.

Static website

`WEBSITE.build` uses `provision` and `mapping` to
create static websites.

## Properties

* `motif` : motif
* `path` : /_motifs/website/website.motif.js
* `id` : website
* `scope` : 
* `folder` : website
* `filePath` : /_motifs/website/website.motif.js
* `symbol` : Ʋ
* `names`
* `occurences`
* `build`
* `get`
* `_commands`

## Instances

**Count : 0.**

### Matching mechanims

* `/.*\/([\w\-]*)\/([\w\-]*).website.js/`.

### Instances list




# `website-folder`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] website-folder**, also known as :

* [EN] Website folder,
* [FR] Dossier de site.

New KAMI !

## Properties

* `motif` : motif
* `path` : /_motifs/website-folder/website-folder.motif.js
* `id` : website-folder
* `scope` : 
* `folder` : website-folder
* `filePath` : /_motifs/website-folder/website-folder.motif.js
* `names`
* `shape`
* `build`


# `website-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] website-page**, also known as :

* [EN] Page de site,
* [FR] Website page.

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).

## Properties

* `motif` : motif
* `path` : /_motifs/website-page/website-page.motif.js
* `id` : website-page
* `scope` : 
* `folder` : website-page
* `filePath` : /_motifs/website-page/website-page.motif.js
* `names`
* `shape`
* `build`
* `create`


# `wiki`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] wiki**, also known as :

* [EN] Wiki,
* [FR] Wiki.

Wiki documentation

WIKI is a component of [DOC](#doc).

## Properties

* `motif` : motif
* `path` : /_motifs/wiki/wiki.motif.js
* `id` : wiki
* `scope` : 
* `folder` : wiki
* `filePath` : /_motifs/wiki/wiki.motif.js
* `names`
