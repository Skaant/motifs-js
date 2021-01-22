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
  ) + 1
  const date = new Date()
  const folderPath = (options && options.scope || '')
    + '/_data/articles/' + newId
  
  await folderMotif.create(folderPath)
  
  /** `.article.js` file */
  await fileMotif.create(
    folderPath,
    newId + '.article.js',
    () => `export default {
  id: '${ newId }',
  title: 'new',
  date: '${ date.getDate().toString().padStart(2, '0')
    }/${ (date.getMonth() + 1).toString().padStart(2, '0')
    }/${ date.getFullYear() }',
  tags: [  ],
  description: false
}`)
  
  /** `content.md` file */
  await fileMotif.create(
    folderPath,
    'content.md',
    () => ''
  )

  return newId
}