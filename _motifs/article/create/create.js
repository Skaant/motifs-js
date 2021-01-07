import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import articleMotif from "../article.motif.js";

export default async options => {

  const articles = await articleMotif.get()
  const newId = articles.reduce(
    (acc, article) => {
      const id = parseInt(article.id)
      return id > acc ? id : acc
    },
    0
  )
    + 1
  const date = new Date()

  await folderMotif.create(
    (options && options.scope || '')
      + '/_data/articles',
    newId,
    folderScope => [
      fileMotif.create(
        folderScope,
        newId + '.article.js',
        () => `export default {
  id: '${ newId }',
  title: '',
  date: '${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() }',
  tags: [  ],
  description: false
}`
      ),
      fileMotif.create(
        folderScope,
        'content.md',
        () => ''
      )
    ]
  ) 
}