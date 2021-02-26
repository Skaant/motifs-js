import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import create from "./create.js";
import fs from "fs"
import { PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";

async function createFirstArticle(path, start) {
  const folderPath = '_tests/'
    + path
    + '/_data/articles/'
    + start

  await folderMotif.create(folderPath)

  await fileMotif.create(
    folderPath,
    start + '.article.js',
    () => `export default {
  id: "${ start }",
  provision: async () => {},
  mapping: async () => []
}`
  )
}

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a new article',
      test: async () => {

        const path = 'article-create-new'
        await createFirstArticle(path, 704)

        await create({ scope: '_tests/' + path })

        try {
          fs.statSync(
            global[PROJECT_PATH]
              + '/_tests/' + path
              + '/_data/articles/705/705.article.js')
          return true
        } catch {
          return false
        }
      }
    }, 
    {
      type: FEATURE,
      label: 'Creates a `content.md` file',
      test: async () => {

        const path = 'article-create-new-content-md'
        await createFirstArticle(path, 957)

        await create({ scope: '_tests/' + path })

        try {
          fs.statSync(
            global[PROJECT_PATH]
              + '/_tests/' + path
              + '/_data/articles/958/content.md')
          return true
        } catch {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: 'New article got the (last maximum + 1) id',
      test: async () => {

        const path = 'article-create-new-increment-id'
        await createFirstArticle(path, 2096)

        await create({ scope: '_tests/' + path })

        try {
          fs.statSync(
            global[PROJECT_PATH]
              + '/_tests/' + path
              + '/_data/articles/2097/2097.article.js')
          return true
        } catch {
          return false
        }
      }
    }
  ]
}