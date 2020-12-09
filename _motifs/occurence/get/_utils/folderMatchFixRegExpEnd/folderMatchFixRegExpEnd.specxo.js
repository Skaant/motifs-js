import folderMatchFixRegExpEnd from "./folderMatchFixRegExpEnd.js";

export default {
  label: 'FEATURE: Given a RegExp, ensure it ends with "$".',
  group: [
    {
      label: 'CASE: The RegExp doesn\'t end with a "$".',
      test: () =>
        
        folderMatchFixRegExpEnd(/_motifs/).toString()
          === /_motifs$/.toString()
    },
    {
      label: 'CASE: The RegExp actually ends with a "$".',
      test: () =>
        
        folderMatchFixRegExpEnd(/_motifs$/).toString()
          === /_motifs$/.toString()
    }
  ]
}