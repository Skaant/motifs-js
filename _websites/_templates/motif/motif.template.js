import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'
import langEnum from "../../../_shrine/lang/_enums/lang.enum.js";

export default data => layoutFragment(
  data,
  {
    title: data.motif.id
      + ' | MOTIF ' + data.motif.names[langEnum.ABS]
      + ' | ' + data.title,
    description: data.motif.description,
    content: `<div class="container">
      <h1 class="main">
        ${ data.motif.id }</h1>
      ${
        (new showdown.Converter({
          simpleLineBreaks: true
        }))
          .makeHtml(data.motif.description)
      }
      <p>
        Back to <a href="/">home</a>.
      </p>
    </div>`
  })