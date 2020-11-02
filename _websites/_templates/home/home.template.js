import layoutFragment from "../_fragments/layout/layout.fragment.js";
import motifListItemFragment from "../_fragments/motifListItem/motifListItem.fragment.js";

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
            style="text-align: center; font-size: 3.5rem">
          MOTIFS
        </h1>
        <p class="col-12 h3 font-weight-light">
          A generative patterns framework</b></p>
      </div>

      <div class="row ">
        <div class="col-12 col-md-8">
      
          <h2 class="mb-4">
            <span class="text-fresh">
              What is a MOTIF ?</span>
          </h2>

          <p>Motif, also known as <i>pattern</i>,
            is the generic concept that bind instances together
            <b>under the same name</b>. In programmation,
            patterns / motifs aim to solve recurring problems with
            generic / abstract answers</b>.</p>

          <p>As stated in the book
            <i><a href="https://en.wikipedia.org/wiki/A_Pattern_Language">
              A Pattern Language</a></i>,
            <b>motifs also has the property to act as words</b>,
            forming sentences (and more) under certains rules. But,
            as now stated in the publication
            <i><a href="https://www.researchgate.net/publication/3981737_Generative_design_patterns">
              Generative Design Patterns</a></i>
            also has the counterpart not to be
            usable directly as operational code.</p>

          <p class="mb-5">
            MOTIFS provides both a library of numerous and
            differently scaling motifs
            and an implementation that <b>makes these motifs
            not only descriptive, but generative</b>.</p>
        </div>
        <div class="col-12 col-md-4">

          <h2 class="mb-4">
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