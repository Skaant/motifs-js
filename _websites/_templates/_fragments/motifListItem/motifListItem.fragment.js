import langEnum from '../../../../_shrine/lang/_enums/lang.enum.js'

export default motif => {

  const prefix = (motif.parents
    ? (motif.parents.join('-')
      + '-')
      
    : '')

  return `<li>
    <a href="/${ prefix + motif.id }">
      <b>${ prefix + motif.names[langEnum.ABS] }</b></a>    
    ${
      (motif.tags || []).map(tag => `
      <span class="badge badge-pill badge-info">
        ${ tag }</span>`
      )
        .join('')
    }
  </li>`
}