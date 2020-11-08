import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => {

  const motif = data.motif
  
  return layoutFragment(
    data,
    {
      title: 'MOTIF ' + motif.id.toUpperCase()
        + ' | ' + data.title,
      description: motif.description,
      content: `<div class="container bg-white shadow py-5 px-md-5">

  <div class="row my-5">
    <div class="col-12 text-center">
      ${
        motif.symbol
          ? `<span class="position-block text-epic symbol-lg">${ motif.symbol }</span><br/>`
          
          : ''
      }
      <span class="position-block h2">MOTIF</span>
      <h1 class="font-epic text-epic">
        ${ motif.id.toUpperCase() }
      </h1>
    </div>
    <div class="col-12 text-center">
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
    <div class="col-12">
      <h2>Quick facts & summary</h2>
      <ul>
        <li>
          <a href="#instances">Instances :</a>
          ${ motif._instances.length }
        </li>
        <li>
          <a href="#description">Description</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-8">
      <h2 id="description"
          class="mb-4">
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
      <h2 id="instances"
          class="mb-4">
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