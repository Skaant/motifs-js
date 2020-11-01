export default motif =>

  new Promise(resolve =>

    resolve([
      [
        '/_motifs/motif/motif.motif.js'
          .match(motif.regExp[0]),
        'Should match "/_motifs/motif/motif.motif.js".' ],
      [
        '/_motifs/motif/_motifs/sub/sub.motif.js'
          .match(motif.regExp[0]),
        'Should match "/_motifs/motif/_motifs/sub/sub.motif.js".' ],
      [
        !'/motif/motif.motif.js'
          .match(motif.regExp[0]),
        'Should NOT match "<motif>/<motif>.motif.js" outside of a "_motifs" folder.' ],
      [
        !'/_motifs/motif.motif.js'
          .match(motif.regExp[0]),
        'Should not match "<motif>.motif.js" outside of a dedicated folder.' ],
      /** @deprecated */
      [
        '/_shrine/kami/kami.kami.js'
          .match(motif.regExp[1]),
        'Should match "/_shrine/kami/kami.kami.js".' ],
      [
        '/_shrine/kami/_shrine/sub/sub.kami.js'
          .match(motif.regExp[1]),
        'Should match "/_shrine/kami/_shrine/sub/sub.kami.js".' ],
      [
        !'/kami/kami.kami.js'
          .match(motif.regExp[1]),
        'Should NOT match "<kami>/<kami>.kami.js" outside of a "_shrine" folder.' ],
      [
        !'/_shrine/kami.kami.js'
          .match(motif.regExp[1]),
        'Should not match "<kami>.kami.js" outside of a dedicated folder.' ]
    ]))