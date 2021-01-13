import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FILES } from "../../global/_enums/names/global.names.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import get from "./get.js";
import getFiles from "../../motif/init/_utils/getFiles/getFiles.js"

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Without `scope`, retrieves occurences matching '
        + 'ARTICLES in PROJECT as ESM modules.',
      test: async () => {
        const folderPath = '_tests/article-no-scope-test/_data/articles/1'
        await folderMotif.create(folderPath)
        await fileMotif.create(
          folderPath,
          '1.article.js',
          () => 'export default { id: "article-no-scope-test" }'
        )
        
        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles()
        const articles = await get()
        global[FILES] = global['_' + FILES]

        return articles.findIndex(article =>
          article.id === 'article-no-scope-test'
        ) > -1
      }
    },
    
    {
      type: FEATURE,
      label: 'Retrieves content from folder `content.md` file, if any.',
      test: async () => {
        const folderPath = '_tests/article-content-md/_data/articles/1'
        await folderMotif.create(folderPath)
        await fileMotif.create(
          folderPath,
          '1.article.js',
          () => 'export default { '
            + 'id: "article-content-md", '
            + 'content: "nope" }'
        )
        await fileMotif.create(
          folderPath,
          'content.md',
          () => 'ok'
        )
        
        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles()
        const articles = await get()
        global[FILES] = global['_' + FILES]

        return articles.findIndex(article =>
          article.id === 'article-content-md'
            && article.content === 'ok'
        ) > -1
      }
    }
  ]
}