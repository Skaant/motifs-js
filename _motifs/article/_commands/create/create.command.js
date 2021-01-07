import ARTICLE from "../../article.motif.js"

export default async options => {

  const id = await ARTICLE.create(options)
  console.log('ARTICLE "'
    + id + '" created at scope "/_data/articles".')
}