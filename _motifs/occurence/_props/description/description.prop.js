export default `WHERE INSTANCES HAPPEN

Occurence defines the apparition rules
(matching properties)
of a MOTIF'S INSTANCE.

Experimental :
\`\`\`javascript
occurences: [
  {
    regExp: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
    transform: ([ scope, folderName, fileName ]) => ({
      scope,
      folderName,
      fileName
    })
  }
]
\`\`\`
`