import layoutFragment from "../_fragments/layout/layout.fragment.js";
import motifListItemFragment from "../_fragments/motifListItem/motifListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'MOTIFS, a generative patterns framework | ' + data.title,
    description: 'MOTIFS is a library of generative patterns and their optional JavaScript implementation.',
    content: `<div class="container">
      <h1 class="main mb-5"
          style="text-align: center; font-size: 3.5rem">
        MOTIFS
      </h1>
      <p class="giant">Think concepts, speak your code</p>
      
      <h2 class="mb-3">Motifs</h2>

      <ul class="list-unstyled">
        ${
          data.motifs
            .map(motif =>
            
              motifListItemFragment(motif))
            .join('')
        }
      </ul>
    </div>`
  })