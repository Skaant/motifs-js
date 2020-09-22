import langEnum from "../../../../lang/_enums/lang.enum.js";

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
        'Should not match "/_websites/" not in the root folder.' ],
      [
        '/_websites/default/temp/default.website.js'
          .match(kami.regExp),
        'Should not match intermediate folder between "id/id.website.js".' ]
    ]))