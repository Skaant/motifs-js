export default motif =>

`<li>
  <a href="/${ motif.id }">
    <b>${ motif.id }</b></a>    
  ${
    (motif.tags || []).map(tag => `
    <span class="badge badge-pill badge-info">
      ${ tag }</span>`
    )
      .join('')
  }
</li>`