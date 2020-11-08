*[32 MOTIFS](#motifs-glossary)
on 11/8/2020, 10:01:39 PM*

![MOTIFS project pictogram : a circle (pattern) crossing a square (instance).](/_websites/en/_assets/logo.svg)

# MOTIFS

> Work on ideas.

## A generative design patterns framework

[motifs [GitHub]](https://github.com/Skaant/motifs) aims to
explore the concepts of **naming as well as [generative design patterns](https://www.researchgate.net/publication/3981737_Generative_design_patterns)**.

Framework's **conceptual entities**, [MOTIFS](#motif),
let you embody projects' classes, components and logic.

Quickly, **they start to form a language** that you can use
to build your applications and
to share with your collaborators.

To get more information about the MOTIF "MOTIF",
please refer to [MOTIF > What is a motif ?](#what-is-a-motif-).

### Table of content

* [What is `MOTIFS` ?](#what-is-motifs-)
* [How to use `MOTIFS` ?](#how-to-use-motifs-)
* [MOTIFS glossary](#motifs-glossary)

### Browse some websites built on `MOTIFS`

* My profesional website, [rimarok.com](https://rimarok.com),
* My creative hub, [imrok.fr](https://imrok.fr),
* A poetic artwork (in progress), [highbs-bok.art](https://highbs-bok.art),
* And soon, the MOTIFS documentation website.


## What is `motifs` ?

`motifs` exposes a set of features which
help managing complexity in projects.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
it helps organizations to exponentially increase the
value of conception and development works.

### Project's keystone

Everything in `motifs` is based on **words**.

**Words and their relations.**

[MOTIFS](#motif) are words, in a context.
`motifs` is a language made of MOTIFS that
you can extend by adding new MOTIFS
and relations between them.

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

#### 0. Development utilities

KAMIS abstract a lot of developement patterns
and can be used to manipulate occurences
of the concept they describe.

#### 1. Glossary

By retrieving the formalized concepts
of your projects, ie. built-in and
customized [KAMIS](#kamis),
you are able to create glossaries on
all your documentation platforms :
README, wiki, website.

*[Jump to README KAMIS' glossary section](#kamis-glossary).*

#### 2. Documentation

After retrieving, you can conditionaly shape
and render concepts that your project manipulate
in order to create relevant views for different
users and uses.

#### 3. Test

Check KAMIS instances and logics against
their specifications.

#### 4. Continuous deployment

Plug framework's features to CI/CD pipelines
through CLI commands.

## How to use `motifs` ?

Here are details some [COMMANDS](#command),
framework's CLI entrypoints.

### Create a new MOTIF

```bash
npm start -- create <scope : '' | ...> <motifId: string>
```

Creates a new [MOTIF](#motif) folders/files tree
at given scope, structured as follow :

```bash
<scope>
+-- /_shrine/
|   +-- <motifId>
|   |   +-- _props
|   |   |   +-- names
|   |   |   |   +-- names.prop.js
|   |   |   +-- description
|   |   |   |   +-- description.prop.js
|   +-- <motifId>.motif.js
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

### Build a WEBSITE

```bash
npm start -- -k website build
```


## MOTIFS' glossary
    
* [`= assertion`](#-assertion) : Assertion
* [`⩮ assertion-group`](#-assertion-group) : Assertion group
* [`▥ book`](#-book) : Book
* [`book-extract`](#book-extract) : Extract, Fragment, Atom
* [`book-image`](#book-image) : Image, Picture, Illustration, Scan
* [`book-page`](#book-page) : Page
* [`book-section`](#book-section) : Section, Chapter, Part
* [`⌿ command`](#-command) : Command
* [`▼ description`](#-description) : Description
* [`⎊ doc`](#-doc) : Documentation
* [`▤ file`](#-file) : File
* [`◰ folder`](#-folder) : Folder
* [`folder-scope`](#folder-scope) : Scope, Perimeter
* [`⤶ get`](#-get) : Accesser, Obtain, Hydrater
* [`# id`](#-id) : Identifier, instance name
* [`⧇ instance`](#-instance) : Instance
* [`ἀ lang`](#-lang) : Language
* [`⚇ motif`](#-motif) : Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva
* [`ʯ occurence`](#-occurence) : Occurence
* [`⛩ pantheon`](#-pantheon) : Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven
* [`Ω project`](#-project) : Project
* [`⁖ prop`](#-prop) : Property, Characteristics, Attribute
* [`⬙ readme`](#-readme) : README
* [`readme-section`](#readme-section) : Section
* [`shrine`](#shrine) : Shrine
* [`Ѭ spec`](#-spec) : Specification
* [`⬫ util`](#-util) : Utility
* [`way`](#way) : Method, Action, Operation, Function
* [`webapp`](#webapp) : Web application
* [`Ʋ website`](#-website) : Website
* [`website-page`](#website-page) : Page, Website page
* [`wiki`](#wiki) : Wiki

# `= assertion`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ASSERTION** is also known as :

* [en] Assertion,
* [fr] Assertion.

SPEC unit

## Properties

* `motif` : motif
* `filePath` : /_motifs/assertion/assertion.motif.js
* `id` : assertion
* `scope` : 
* `folderName` : assertion
* `fileName` : assertion.motif.js
* `symbol` : =
* `names`


# `⩮ assertion-group`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ASSERTION-GROUP** is also known as :

* [en] Assertion group,
* [fr] Groupe d'assertion.

Same-scope, same-theme, ASSERTIONS lot

## Properties

* `motif` : motif
* `filePath` : /_motifs/assertion-group/assertion-group.motif.js
* `id` : assertion-group
* `scope` : 
* `folderName` : assertion-group
* `fileName` : assertion-group.motif.js
* `symbol` : ⩮
* `names`


# `▥ book`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**BOOK** is also known as :

* [en] Book,
* [fr] Livre.

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
* `filePath` : /_motifs/book/book.motif.js
* `id` : book
* `scope` : 
* `folderName` : book
* `fileName` : book.motif.js
* `symbol` : ▥
* `names`
* `occurences`
* `get`
* `provision`


# `book-extract`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**BOOK-EXTRACT** is also known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

A small piece of BOOK

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

## Properties

* `motif` : motif
* `filePath` : /_motifs/book-extract/book-extract.motif.js
* `id` : book-extract
* `scope` : 
* `folderName` : book-extract
* `fileName` : book-extract.motif.js
* `names`
* `occurences`


# `book-image`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**IMAGE** is also known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

## Properties

* `motif` : motif
* `filePath` : /_motifs/book-image/book-image.motif.js
* `id` : book-image
* `scope` : 
* `folderName` : book-image
* `fileName` : book-image.motif.js
* `names`
* `occurences`
* `copy`


# `book-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PAGE** is also known as :

* [en] Page,
* [fr] Page.

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

## Properties

* `motif` : motif
* `filePath` : /_motifs/book-page/book-page.motif.js
* `id` : book-page
* `scope` : 
* `folderName` : book-page
* `fileName` : book-page.motif.js
* `names`
* `occurences`
* `get`
* `provision`


# `book-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SECTION** is also known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

**BOOK SUB-DIVISION**

## Properties

* `motif` : motif
* `filePath` : /_motifs/book-section/book-section.motif.js
* `id` : book-section
* `scope` : 
* `folderName` : book-section
* `fileName` : book-section.motif.js
* `names`
* `occurences`
* `get`
* `provision`


# `⌿ command`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**COMMAND** is also known as :

* [en] Command,
* [fr] Commande.

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
* `filePath` : /_motifs/command/command.motif.js
* `id` : command
* `scope` : 
* `folderName` : command
* `fileName` : command.motif.js
* `symbol` : ⌿
* `names`
* `occurences`


# `▼ description`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**DESCRIPTION** is also known as :

* [en] Description,
* [fr] Description.

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
* `filePath` : /_motifs/description/description.motif.js
* `id` : description
* `scope` : 
* `folderName` : description
* `fileName` : description.motif.js
* `symbol` : ▼
* `names`
* `occurences`


# `⎊ doc`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**DOC** is also known as :

* [en] Documentation,
* [fr] Documentation.

General documentation ressources

DOC is composed of few sub-[MOTIFS](#motif) :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

## Properties

* `motif` : motif
* `filePath` : /_motifs/doc/doc.motif.js
* `id` : doc
* `scope` : 
* `folderName` : doc
* `fileName` : doc.motif.js
* `symbol` : ⎊
* `names`


# `▤ file`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FILE** is also known as :

* [en] File,
* [fr] Fichier.

File meta-data

*Pattern should later be extended depending on
the file extension.*

## Properties

* `motif` : motif
* `filePath` : /_motifs/file/file.motif.js
* `id` : file
* `scope` : 
* `folderName` : file
* `fileName` : file.motif.js
* `symbol` : ▤
* `names`
* `create`
* `get`
* `copy`


# `◰ folder`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FOLDER** is also known as :

* [en] Folder,
* [fr] Dossier.

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
* `filePath` : /_motifs/folder/folder.motif.js
* `id` : folder
* `scope` : 
* `folderName` : folder
* `fileName` : folder.motif.js
* `symbol` : ◰
* `names`
* `create`
* `copy`
* `clear`
* `_specs`


# `folder-scope`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FOLDER-SCOPE** is also known as :

* [en] Scope, Perimeter,
* [fr] Portée, Périmètre.

SUB-FOLDER TREE

In a FS representation, the scope
is the root folder, or a sub-folder.

## Properties

* `motif` : motif
* `filePath` : /_motifs/folder-scope/folder-scope.motif.js
* `id` : folder-scope
* `scope` : 
* `folderName` : folder-scope
* `fileName` : folder-scope.motif.js
* `names`


# `⤶ get`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**GET** is also known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

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
* `filePath` : /_motifs/get/get.motif.js
* `id` : get
* `scope` : 
* `folderName` : get
* `fileName` : get.motif.js
* `symbol` : ⤶
* `names`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_ways\/get\/get.way.js/`.




# `# id`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ID** is also known as :

* [en] Identifier, instance name,
* [fr] Identifieur, nom d'instance.

INSTANCE NAME

For a given MOTIF and given SCOPE,
the ID is the unique name of an instance.

It is usually a PROP.

## Properties

* `motif` : motif
* `filePath` : /_motifs/id/id.motif.js
* `id` : id
* `scope` : 
* `folderName` : id
* `fileName` : id.motif.js
* `symbol` : #
* `names`


# `⧇ instance`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**INSTANCE** is also known as :

* [en] Instance,
* [fr] Instance.

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
* `filePath` : /_motifs/instance/instance.motif.js
* `id` : instance
* `scope` : 
* `folderName` : instance
* `fileName` : instance.motif.js
* `symbol` : ⧇
* `names`
* `get`


# `ἀ lang`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**LANG** is also known as :

* [en] Language,
* [fr] Langage.

## Properties

* `motif` : motif
* `filePath` : /_motifs/lang/lang.motif.js
* `id` : lang
* `scope` : 
* `folderName` : lang
* `fileName` : lang.motif.js
* `symbol` : ἀ
* `names`


# `⚇ motif`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**MOTIF** is also known as :

* [en] Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva,
* [fr] Concept, Idée, Mot, Motif, Esprit, Dieu, Ange, Deva.

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
* `filePath` : /_motifs/motif/motif.motif.js
* `id` : motif
* `scope` : 
* `folderName` : motif
* `fileName` : motif.motif.js
* `symbol` : ⚇
* `names`
* `occurences`
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
* `specs`
* `_specs`
* `ave`

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


# `ʯ occurence`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**OCCURENCE** is also known as :

* [en] Occurence,
* [fr] Occurence.

WHERE INSTANCES HAPPEN

Occurence defines the apparition rules
(matching properties)
of a MOTIF'S INSTANCE.

Experimental :
```javascript
occurences: [
  {
    regExp: /(.*)/_motifs/(.*)/(.*).motif.js/,
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
* `filePath` : /_motifs/occurence/occurence.motif.js
* `id` : occurence
* `scope` : 
* `folderName` : occurence
* `fileName` : occurence.motif.js
* `symbol` : ʯ
* `names`


# `⛩ pantheon`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PANTHEON** is also known as :

* [en] Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven,
* [fr] Panthéon, Sanctuaire primordial, Valhalla, Mont Olympe, Acropole, Paradis.

Primordial MOTIFS' package

This is a *legendary* concept.

There lies the most abstract and/or transverse [MOTIFS](#motif),
the angels and last steps upon the One.

## Properties

* `motif` : motif
* `filePath` : /_motifs/pantheon/pantheon.motif.js
* `id` : pantheon
* `scope` : 
* `folderName` : pantheon
* `fileName` : pantheon.motif.js
* `symbol` : ⛩
* `names`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/kami.js\/_shrine$/`.




# `Ω project`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PROJECT** is also known as :

* [en] Project,
* [fr] Projet.

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
* `filePath` : /_motifs/project/project.motif.js
* `id` : project
* `scope` : 
* `folderName` : project
* `fileName` : project.motif.js
* `symbol` : Ω
* `names`


# `⁖ prop`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PROP** is also known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

Properties of an instance

PROPS can be hard-bounded in `.motif.js` file
or dynamically bound in `MOTIF.get()` method.

*(historical) `_props` folders contains
[kami](#kami)'s properties content.*

## Properties

* `motif` : motif
* `filePath` : /_motifs/prop/prop.motif.js
* `id` : prop
* `scope` : 
* `folderName` : prop
* `fileName` : prop.motif.js
* `symbol` : ⁖
* `names`


# `⬙ readme`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**README** is also known as :

* [en] README,
* [fr] README.

**GITHUB README**

README instance occurs once by [PROJECT](#project),
in the `/_readme folder`.

Specific PROJECT's README [SECTIONS](#sections) are
located in `/_readme/_sections`,
genercis are located in `/kami.js/_shrine/readme/_sections`.

README is a component of [DOC](#-doc).

## Properties

* `motif` : motif
* `filePath` : /_motifs/readme/readme.motif.js
* `id` : readme
* `scope` : 
* `folderName` : readme
* `fileName` : readme.motif.js
* `symbol` : ⬙
* `names`
* `get`
* `build`
* `_commands`


# `readme-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SECTION** is also known as :

* [en] Section,
* [fr] Section.

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

## Properties

* `motif` : motif
* `filePath` : /_motifs/readme-section/readme-section.motif.js
* `id` : readme-section
* `scope` : 
* `folderName` : readme-section
* `fileName` : readme-section.motif.js
* `names`
* `regExp`
* `create`

## Occurences

**Count : 0.**

Matching regular expression :

* `/^\/_readme\/_sections\/(.*)\/(.*)\.section.js/`,
* `/\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/`.




# `shrine`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ШRᛏGHN** is also known as :

* [en] Shrine,
* [fr] Sanctuaire.

(historical) A MOTIFS' node

## Properties

* `motif` : motif
* `filePath` : /_motifs/shrine/shrine.motif.js
* `id` : shrine
* `scope` : 
* `folderName` : shrine
* `fileName` : shrine.motif.js
* `names`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/_shrine$/`.




# `Ѭ spec`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SPEC** is also known as :

* [en] Specification,
* [fr] Spécification.

MOTIFS' TEST MATERIAL

In `kami.js` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a KAMI (hold by the KAMI),
* **Specific SPECS**, which target a single
  instance of a KAMI (hold by the instance).

## Properties

* `motif` : motif
* `filePath` : /_motifs/spec/spec.motif.js
* `id` : spec
* `scope` : 
* `folderName` : spec
* `fileName` : spec.motif.js
* `symbol` : Ѭ
* `names`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/`.




# `⬫ util`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**UTIL** is also known as :

* [en] Utility,
* [fr] Utilitaire.

The place to put things

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utilities are usually consumed by same scope or 
lower levels modules.

You should avoid repetitions in `_utils` as
everywhere else in the code.


## Properties

* `motif` : motif
* `filePath` : /_motifs/util/util.motif.js
* `id` : util
* `scope` : 
* `folderName` : util
* `fileName` : util.motif.js
* `symbol` : ⬫
* `names`


# `way`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WAY** is also known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

(historical) MOTIFS' METHOD

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

## Properties

* `motif` : motif
* `filePath` : /_motifs/way/way.motif.js
* `id` : way
* `scope` : 
* `folderName` : way
* `fileName` : way.motif.js
* `names`


# `webapp`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WEBAPP** is also known as :

* [en] Web application,
* [fr] Application web.

The dynamic WEBSITE backend

A webapp exposes MOTIFS and their operations
(customs and generics) as endpoints.

## Properties

* `motif` : motif
* `filePath` : /_motifs/webapp/webapp.motif.js
* `id` : webapp
* `scope` : 
* `folderName` : webapp
* `fileName` : webapp.motif.js
* `names`


# `Ʋ website`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WEBSITE** is also known as :

* [en] Website,
* [fr] Site internet.

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

## Properties

* `motif` : motif
* `filePath` : /_motifs/website/website.motif.js
* `id` : website
* `scope` : 
* `folderName` : website
* `fileName` : website.motif.js
* `symbol` : Ʋ
* `names`
* `occurences`
* `build`
* `_commands`
* `_specs`


# `website-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PAGE** is also known as :

* [en] Page, Website page,
* [fr] Page, Page de site internet.

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).


## Properties

* `motif` : motif
* `filePath` : /_motifs/website-page/website-page.motif.js
* `id` : website-page
* `scope` : 
* `folderName` : website-page
* `fileName` : website-page.motif.js
* `names`
* `create`


# `wiki`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WIKI** is also known as :

* [en] Wiki,
* [fr] Wiki.

Wiki documentation

WIKI is a component of [DOC](#doc).

## Properties

* `motif` : motif
* `filePath` : /_motifs/wiki/wiki.motif.js
* `id` : wiki
* `scope` : 
* `folderName` : wiki
* `fileName` : wiki.motif.js
* `names`
