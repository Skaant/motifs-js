import WEBSITE from "../../../website.motif.js"

export default (options, id) =>

  new Promise(resolve => {

    WEBSITE.build(
      id,
      options
    )
      .then(website => {

        console.log('WEBSITE "'
          + website.title + '" created at path "'
          + '/_build/' + website.id + '".')
        
        resolve()
      })
  })