export default kami =>

  new Promise(resolve =>

    resolve([
      [
        '/_websites/default/default.website.js'
          .match(kami.regExp),
        'Should match "/_websites/default/default.website.js".' ],
      [
        !'/temp/_websites/default/default.website.js'
          .match(kami.regExp),
        'Should NOT match "/_websites/" outside of root folder.' ],
      [
        '/_websites/default/temp/default.website.js'
          .match(kami.regExp),
        'Should not match intermediate folder between "id/id.website.js".' ]
    ]))