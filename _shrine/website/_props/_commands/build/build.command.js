import WEBSITE from "../../../website.kami.js"
// FOR DEV TEST ONLY
import defaultWebsite from "../../../../../../_websites/default/default.website.js"

export default (options, scope) =>

  new Promise(resolve => {

    WEBSITE.build(
      scope,
      defaultWebsite,
      options
    )
      .then(() => {

        console.log('WEBSITE "'
          + defaultWebsite.title + '" created at path "'
          + scope + '/_build".')
        
        resolve()
      })
  })