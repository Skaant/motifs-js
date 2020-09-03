![The kami pictogram](/kami.svg)

# kami.js
`kami.js` aims to explore the concept of naming and patterns. It creates virtual entities, the [kamis](#kami), to embody project's classes, components and logic.

## `_` happens in the spirit world
The root of pattern occurence is shown by `_`.

Inside an occurence can be a single instance or a group of the same pattern's instances.

`_` announces the beginning of a specific [kami](#kami) domain.

### Invoking kamis
Exactly after the `_` is shown a [kami](#kami)'s [invokation](#invokation).

Invokation are used to instanciate a kami of used word's kami reference at the occurence location.

Most notable examples :

* The `_shrine/` instances folder *([`shrine`](#shrine) are root folder of [kami](#kami) [instances](#instances)).*

### Kamis' instances
Kamis' instances have both unique (for their [namespace](#namespace)) id and name.

Their occurence path usually looks like the following : `_<kami.WORD>/<kami.id>/<kami.id>.kami.js`. It exports the [kami](#kami) definition.

Most notable examples :

* The `.kami.js` instances file *([`kami`](#kami) are described, instanciated, tested, ... made alive by these files content)*.
