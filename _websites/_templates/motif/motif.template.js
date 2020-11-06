import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'
import fullIdUtil from "../../_utils/fullId/fullId.util.js";

export default data => {

  const motif = data.motif
  const fullId = fullIdUtil(motif)
  
  return layoutFragment(
    data,
    {
      title: 'MOTIF ' + fullId.toUpperCase()
        + ' | ' + data.title,
      description: motif.description,
      content: `<div class="container">

  <div class="row my-5">
    <div class="col-12 text-center">
      <h1 class="font-epic">
        ${
          motif.symbol
            ? `<span class="text-epic symbol">${ motif.symbol }</span><br/>`
            
            : ''
        }
        <span class="small">MOTIF</span>
        <span class="text-epic">
          ${ fullId.toUpperCase() }
        </span>
      </h1>
      <p class="h3 font-weight-light">
        ${
          motif.description
            ? motif.description.split('\n')[0]

            : ''
        }
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-8">
      <h2 class="mb-4">
        <span class="text-fresh">
          MOTIF's description</span>
      </h2>
      ${
        motif.description
          ? (new showdown.Converter({
            ghCompatibleHeaderId: true
          }))
            .makeHtml(motif.description.slice(
              motif.description.indexOf('\n')
            ))
          
          : ''
      }
    </div>
    <div class="col-12 col-md-4">
      <h2 class="mb-4">
        <span class="text-fresh">
          INSTANCES' list</span>
      </h2>
      <ul>
        ${
          data.motif._instances.map(fileMeta =>
            
            `<li>${ fileMeta.id || fileMeta.filePath }</li>`)
            .join('\n')
        }
      </ul>
    </div>
  </div>
  <p class="mt-5 text-muted">
    Back to <a href="/">home</a>.
  </p>
</div>`
  })
}