import layoutFragment from "../_fragments/layout/layout.fragment.js";
import motifCardFragment from "../_fragments/motifCard/motifCard.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: 'MOTIFS, A generative patterns framework | ' + data.title,
    description: 'MOTIFS is a library of generative patterns and an JavaScript implementation.',
    content: `<div class="container bg-white shadow py-5 px-md-5">
      <div class="row text-center"
          style="margin-bottom: 5rem">
        <div class='col-12'>
          <img src="/assets/logo.svg"
              class="mx-auto mt-5 pt-4"
              alt="The MOTIFS' framework logo : a circle and a square intricated. Circle stands for the motif, square for the instance." />
        </div>
        <div class='col-12'>
          <h1 class="text-epic font-epic mt-4 mb-0">
            MOTIFS
          </h1>
          <p class="h3 mb-5">
              Work on ideas !</p>
        </div>
      </div>
      <div class="row ">
        <div class='col-12 text-left'>
          <h2 class='mt-5'>
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

To learn more, you should start with the [MOTIF MOTIF](/motif).`)
          }
        </div>
      </div>

      <div class="row flex-row-reverse">
        <div class="col-12">

          <h2>
            <span class="text-fresh">
              MOTIFS' list</span>
          </h2>

          <div class="row mb-4">
            ${
              data.motifs
                .map(motif =>
                
                  motifCardFragment(motif))
                .join('')
            }
          </div>
        </div>
      </div>
    </div>`
  })