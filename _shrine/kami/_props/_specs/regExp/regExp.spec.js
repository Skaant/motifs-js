export default motif =>

  new Promise(resolve =>

    resolve([
      [
        '/_motifs/motif/motif.motif.js'
          .match(motif.occurences[0].regExp),
        'Should match "/_motifs/motif/motif.motif.js".' ],
      [
        '/_motifs/motif/_motifs/sub/sub.motif.js'
          .match(motif.occurences[0].regExp),
        'Should match "/_motifs/motif/_motifs/sub/sub.motif.js".' ],
      [
        !'/motif/motif.motif.js'
          .match(motif.occurences[0].regExp),
        'Should NOT match "<motif>/<motif>.motif.js" outside of a "_motifs" folder.' ],
      [
        !'/_motifs/motif.motif.js'
          .match(motif.occurences[0].regExp),
        'Should not match "<motif>.motif.js" outside of a dedicated folder.' ]
    ]))