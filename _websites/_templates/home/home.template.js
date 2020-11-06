import layoutFragment from "../_fragments/layout/layout.fragment.js";
import motifListItemFragment from "../_fragments/motifListItem/motifListItem.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: 'MOTIFS, A generative patterns framework | ' + data.title,
    description: 'MOTIFS is a library of generative patterns and an JavaScript implementation.',
    content: `<div class="container bg-white shadow p-5 mt-5">
      <div class="row text-center px-2"
          style="margin-bottom: 5rem">
        <div class='col-12 col-md-4'>
          <img src="/assets/logo.svg"
              class="mx-auto"
              alt="The MOTIFS' framework logo : a circle and a square intricated. Circle stands for the motif, square for the instance." />
          <h1 class="col-12 text-epic font-epic mt-5 mb-0"
              style="text-align: center;">
            M◒TIFS
          </h1>
          <p class="col-12 h3 font-weight-light mb-5">
            Work on ideas !</p>
        </div>
        <div class='col-12 col-md-8 px-4 px-md-5 text-left'>
          <h2 class='mt-2'>
            <span class="text-fresh">
              A generative patterns framework</span>
          </h2>
          ${
            (new showdown.Converter()).makeHtml(`
[motifs [GitHub]](https://github.com/Skaant/motifs) aims to
explore the concepts of **naming as well as [generative design patterns](https://www.researchgate.net/publication/3981737_Generative_design_patterns)**.

Framework's **conceptual entities**, [MOTIFS](/motif),
let you embody projects' classes, components and logic.

Quickly, **they start to form a language** that you can use
to build your applications and
to share with your collaborators.

To get more information about the MOTIF "MOTIF",
please refer to [MOTIF > What is a motif ?](/motif#what-is-a-motif-).`)
          }
        </div>
      </div>

      <div class="row flex-row-reverse">
        <div class="col-12">

          <h2>
            <span class="text-fresh">
              MOTIFS' list</span>
          </h2>

          <ul class="mb-4 list-unstyled">
            ${
              data.motifs
                .map(motif =>
                
                  motifListItemFragment(motif))
                .join('')
            }
          </ul>
        </div>
      </div>
    </div>`
  })