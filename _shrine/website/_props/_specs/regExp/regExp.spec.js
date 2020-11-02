export default motif =>

  new Promise(resolve =>

    resolve([
      [
        '/_websites/default/default.website.js'
          .match(motif.occurences[0].regExp),
        'Should match "/_websites/default/default.website.js".' ],
      [
        !'/temp/_websites/default/default.website.js'
          .match(motif.occurences[0].regExp),
        'Should NOT match "/_websites/" outside of root folder.' ],
      [
        '/_websites/default/temp/default.website.js'
          .match(motif.occurences[0].regExp),
        'Should not match intermediate folder between "id/id.website.js".' ]
    ]))