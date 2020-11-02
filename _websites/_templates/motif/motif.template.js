import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'
import fullIdUtil from "../../_utils/fullId/fullId.util.js";

export default data => {

  const fullId = fullIdUtil(data.motif)
  
  return layoutFragment(
    data,
    {
      title: 'MOTIF ' + fullId.toUpperCase()
        + ' | ' + data.title,
      description: data.motif.description,
      content: `<div class="container">
        <h1 class="main">
          ${ fullId.toUpperCase() }</h1>
        ${
          (new showdown.Converter({
            simpleLineBreaks: true
          }))
            .makeHtml(data.motif.description)
        }
        <p class="mt-5 text-muted">
          Back to <a href="/">home</a>.
        </p>
      </div>`
    })
}