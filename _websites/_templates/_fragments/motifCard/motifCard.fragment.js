export default motif =>

  `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2">
    <div class="card border-0">
      <div class="card-body">
        <a href="/${ motif.id }"
            class="d-block text-center mb-0 symbol-md ${ motif.symbol ? '' : 'text-muted' }">
          ${ motif.symbol || '?' }
        </a>
        <a href="/${ motif.id }"
            class="d-blocks">
          <h4 class="card-title">
            ${ motif.id.toUpperCase() }</h4>
        </a>
        <p class="card-text mb-0">
          ${ motif.description ? motif.description.split('\n')[0] : '...' }
        </p>
      </div>
    </div>
  </div>`