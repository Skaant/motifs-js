*[28 KAMIS](#kamis-glossary)
on 11/4/2020, 7:23:14 AM*

# kami.js

> Work on ideas.

![kami.js project pictogram](/_websites/en/_assets/logo.svg)

`kami.js` aims to explore the concepts of
**patterns and naming**.

You create virtual entities, [KAMIS](#kami),
to embody projects' classes, components and logic.

Quickly, it starts to **form a language** that
you can use to communicate with your collaborators.

### Table of content

* [What is `kami.js` ?](#what-is-kamijs-)
* [How to use `kami.js` ?](#how-to-use-kamijs-)
* [KAMIS glossary](#kamis-glossary)

### Browse some websites built on `kami.js`

* [imrok.fr](https://imrok.fr),
* [highbs-bok.art](https://highbs-bok.art),
* *soon, the `kami.js` documentation website*.


## What is `kami.js` ?

`kami.js` exposes a set of features which
help managing complexity in projects.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
it helps organizations to exponentially increase the
value of conception and development works.

### Project's keystone

Everything in `kami.js` is based on **words**.

**Words and their relations.**

[KAMIS](#kami) are words, in a context.
`kami.js` is a language made of KAMIS that
you can extend by adding KAMIS
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

## How to use `kami.js` ?

Here are details some [COMMANDS](#command),
framework's CLI entrypoints.

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

## MOTIFS' glossary
    
* [BOOK](#book) : Book
* [BOOK-EXTRACT](#book-extract) : Extract, Fragment, Atom
* [IMAGE](#book-image) : Image, Picture, Illustration, Scan
* [PAGE](#book-page) : Page
* [SECTION](#book-section) : Section, Chapter, Part
* [COMMAND](#command) : Command
* [DOC](#doc) : Documentation
* [FILE](#file) : File
* [FOLDER](#folder) : Folder
* [FOLDER-SCOPE](#folder-scope) : Scope, Périmètre
* [GET](#get) : Accesser, Obtain, Hydrater
* [ID](#id) : Identifier, instance name
* [INSTANCE](#instance) : Instance
* [LANG](#lang) : Language
* [MOTIF](#motif) : Concept, Idea, Word, Pattern
* [OCCURENCE](#occurence) : Occurence
* [PANTHEON](#pantheon) : Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven
* [PROP](#prop) : Property, Characteristics, Attribute
* [README](#readme) : README
* [SECTION](#section) : Section
* [ШRᛏGHN](#shrine) : Shrine
* [SPEC](#spec) : Specification
* [UTIL](#util) : Utility
* [WAY](#way) : Method, Action, Operation, Function
* [WEBAPP](#webapp) : Web application
* [WEBSITE](#website) : Website
* [PAGE](#website-page) : Page, Website page
* [WIKI](#wiki) : Wiki

# `book`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**BOOK** is a project specific MOTIF.

It is known as :

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

**Count: 7.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`
* `get`
* `provision`


# `book-extract`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**BOOK-EXTRACT** is a project specific MOTIF.

It is known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

A small piece of BOOK

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`


# `book-image`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**IMAGE** is a project specific MOTIF.

It is known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

## Properties

**Count: 6.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`
* `copy`


# `book-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PAGE** is a project specific MOTIF.

It is known as :

* [en] Page,
* [fr] Page.

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

## Properties

**Count: 7.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`
* `get`
* `provision`


# `book-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SECTION** is a project specific MOTIF.

It is known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

**BOOK SUB-DIVISION**

## Properties

**Count: 7.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`
* `get`
* `provision`


# `command`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**COMMAND** is a project specific MOTIF.

It is known as :

* [en] Command,
* [fr] Commande.

MOTIF CLI interface

Basically, a command bind a method to match a MOTIF entrypoint syntax.

## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`


# `doc`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**DOC** is a project specific MOTIF.

It is known as :

* [en] Documentation,
* [fr] Documentation.

General documentation ressources

DOC is composed of few sub-[MOTIFS](#motif) :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `file`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FILE** is a project specific MOTIF.

It is known as :

* [en] File,
* [fr] Fichier.

File meta-data

*Pattern should later be extended depending on
the file extension.*

## Properties

**Count: 7.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `create`
* `get`
* `copy`


# `folder`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FOLDER** is a project specific MOTIF.

It is known as :

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

**Count: 8.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `create`
* `copy`
* `clear`
* `_specs`


# `folder-scope`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**FOLDER-SCOPE** is a project specific MOTIF.

It is known as :

* [en] Scope, Périmètre,
* [fr] Portée, Perimeter.

SUB-FOLDER TREE

In a FS representation, the scope
is the root folder, or a sub-folder.

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `get`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**GET** is a project specific MOTIF.

It is known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

**INSTANCE ACCESSERS**

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


## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_ways\/get\/get.way.js/`.




# `id`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ID** is a project specific MOTIF.

It is known as :

* [en] Identifier, instance name,
* [fr] Identifieur, nom d'instance.

INSTANCE NAME

For a given MOTIF and given SCOPE,
the ID is the unique name of an instance.

It is usually a PROP.

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `instance`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**INSTANCE** is a project specific MOTIF.

It is known as :

* [en] Instance,
* [fr] Instance.

**INDIVIDUAL OF ONE OR MULTIPLE KAMIS**

Instances are occurence of a [KAMI](#kami) (pattern).

They usually :
* Can be retrieved through [`<kami>.get`] way,
* Can be created through [`<kami>.create`] way,
* Can be tested through [`<kami>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[KAMIS](#kami) (`<...>.kami.js`) are instances of KAMI-KAMI.

**KAMI-KAMI is an instance of itself !**

## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `get`


# `lang`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**LANG** is a project specific MOTIF.

It is known as :

* [en] Language,
* [fr] Langage.

## Properties

**Count: 3.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`


# `motif`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**MOTIF** is a project specific MOTIF.

It is known as :

* [en] Concept, Idea, Word, Pattern,
* [fr] Concept, Idée, Mot, Motif.

MOTIF of all MOTIFS

MOTIFS are "enlived" patterns, making them
not only **descriptive** but also **generative**.

## Properties

**Count: 14.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `occurences`
* `flavour`
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


# `occurence`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**OCCURENCE** is a project specific MOTIF.

It is known as :

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

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `pantheon`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PANTHEON** is a project specific MOTIF.

It is known as :

* [en] Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven,
* [fr] Panthéon, Sanctuaire primordial, Valhalla, Mont Olympe, Acropole, Paradis.

**SHRINE OF PRIMORDIAL KAMIS**

There lies the most abstract and/or transverse [KAMIS](#kami),
the angels and last steps upon the One.

## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/kami.js\/_shrine$/`.




# `prop`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PROP** is a project specific MOTIF.

It is known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

Properties of an instance

PROPS can be hard-bounded in `.motif.js` file
or dynamically bound in `MOTIF.get()` method.

*(historical) `_props` folders contains
[kami](#kami)'s properties content.*

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `readme`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**README** is a project specific MOTIF.

It is known as :

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

**Count: 7.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `get`
* `build`
* `_commands`


# `section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SECTION** is a project specific MOTIF.

It is known as :

* [en] Section,
* [fr] Section.

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

## Properties

**Count: 6.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `regExp`
* `create`

## Occurences

**Count : 0.**

Matching regular expression :

* `/^\/_readme\/_sections\/(.*)\/(.*)\.section.js/`,
* `/\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/`.




# `shrine`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ШRᛏGHN** is a project specific MOTIF.

It is known as :

* [en] Shrine,
* [fr] Sanctuaire.

(historical) A MOTIFS' node

## Properties

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `regExp`
* `description`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/_shrine$/`.




# `spec`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**SPEC** is a project specific MOTIF.

It is known as :

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

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `regExp`

## Occurences

**Count : 0.**

Matching regular expression :

`/(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/`.




# `util`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**UTIL** is a project specific MOTIF.

It is known as :

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

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `way`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WAY** is a project specific MOTIF.

It is known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

(historical) MOTIFS' METHOD

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `webapp`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WEBAPP** is a project specific MOTIF.

It is known as :

* [en] Web application,
* [fr] Application web.

The dynamic WEBSITE backend

A webapp exposes MOTIFS and their operations
(customs and generics) as endpoints.

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`


# `website`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WEBSITE** is a project specific MOTIF.

It is known as :

* [en] Website,
* [fr] Site internet.

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

## Properties

**Count: 8.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `occurences`
* `description`
* `build`
* `_commands`
* `_specs`


# `website-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**PAGE** is a project specific MOTIF.

It is known as :

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

**Count: 5.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
* `create`


# `wiki`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**WIKI** is a project specific MOTIF.

It is known as :

* [en] Wiki,
* [fr] Wiki.

Wiki documentation

WIKI is a component of [DOC](#doc).

## Properties

**Count: 4.**

* `motif`
* `filePath`
* `id`
* `folderName`
* `fileName`
* `names`
* `description`
