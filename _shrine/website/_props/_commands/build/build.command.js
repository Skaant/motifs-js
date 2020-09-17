import WEBSITE from "../../../website.kami.js"

export default (options, scope, title) =>

  new Promise(resolve => {

    WEBSITE.build(
      scope,
      [],
      {
        ...options,
        title
      })
      .then(() => {

        console.log('WEBSITE "'
          + title + '" created at scope "'
          + scope + '".')
        
        resolve()
      })
  })