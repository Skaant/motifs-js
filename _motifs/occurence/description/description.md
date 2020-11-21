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