import fullIdUtil from "../../../_utils/fullId/fullId.util.js"

export default motif => {

  const fullId = fullIdUtil(motif)

  return `<li>
    <a href="/${ fullId }">
      ${ fullId.toUpperCase() }</a>
    ${
      (motif.tags || []).map(tag => `
      <span class="badge badge-pill badge-info">
        ${ tag }</span>`
      )
        .join('')
    }
  </li>`
}