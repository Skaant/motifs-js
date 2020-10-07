export default kami =>

  new Promise(resolve =>

    resolve([
      [
        '/_shrine/kami/kami.kami.js'
          .match(kami.regExp),
        'Should match "/_shrine/kami/kami.kami.js".' ],
      [
        '/_shrine/kami/_shrine/sub/sub.kami.js'
          .match(kami.regExp),
        'Should match "/_shrine/kami/_shrine/sub/sub.kami.js".' ],
      [
        !'/kami/kami.kami.js'
          .match(kami.regExp),
        'Should NOT match "<kami>/<kami>.kami.js" outside of a "_shrine" folder.' ],
      [
        !'/_shrine/kami.kami.js'
          .match(kami.regExp),
        'Should not match "<kami>.kami.js" outside of a dedicated folder.' ]
    ]))