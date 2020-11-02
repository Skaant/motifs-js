export default motif =>

((motif.parents
  ? (motif.parents.join('-') + '-')
    
  : '')

  + motif.id)
  .toUpperCase()