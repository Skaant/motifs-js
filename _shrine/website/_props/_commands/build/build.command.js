import WEBSITE from "../../../website.kami.js"

export default (options, scope, id) =>

  new Promise(resolve => {

    WEBSITE.build(
      scope,
      id,
      options
    )
      .then(website => {

        console.log('WEBSITE "'
          + website.title + '" created at path "'
          + scope + '/_build".')
        
        resolve()
      })
  })