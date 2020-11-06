import layoutFragment from "../_fragments/layout/layout.fragment.js";
import motifListItemFragment from "../_fragments/motifListItem/motifListItem.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: 'MOTIFS, A generative patterns framework | ' + data.title,
    description: 'MOTIFS is a library of generative patterns and an JavaScript implementation.',
    content: `<div class="container">
      <div class="row">
        <img src="/assets/logo.svg"
            class="mx-auto my-5"
            alt="The MOTIFS' framework logo : a circle and a square intricated. Circle stands for the motif, square for the instance." />
      </div>
      <div class="row text-center"
          style="margin-bottom: 5rem">
        <h1 class="col-12 text-epic font-epic"
            style="text-align: center;">
          MOTIFS
        </h1>
        <p class="col-12 h3 font-weight-light">
          Work on ideas !</p>
      </div>

      <div class="row flex-row-reverse">
        <div class="col-12 col-md-8">
      
          <h2>
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
please see [MOTIF > What is a motif ?](/motif#what-is-amotif).`)
          }

        </div>
        <div class="col-12 col-md-4">

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