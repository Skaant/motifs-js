export default motif =>

  `<li>
    <a href="/${ motif.id }">
      ${ motif.symbol || '' }
      ${ motif.id.toUpperCase() }</a>
    ${
      (motif.tags || []).map(tag => `
      <span class="badge badge-pill badge-info">
        ${ tag }</span>`
      )
        .join('')
    }
  </li>`