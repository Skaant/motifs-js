import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FRAMEWORK_PATH } from "../../global/_enums/names/global.names.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import get from "./get.js";
import { STANDALONE } from "../../global/_enums/frameworkPath/frameworkPath.enum.js";

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
        
        const articles = await get()

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
        
        const articles = await get()

        return articles.findIndex(article =>
          article.id === 'article-content-md'
            && article.content === 'ok'
        ) > -1
      }
    },
    
    {
      type: FEATURE,
      label: 'Retrieves folder images, if any.',
      test: async () => {
        const id = 'article-get-images'
        const folderPath = '_tests/'
          + id + '/_data/articles/2'
        await folderMotif.create(folderPath)
        await fileMotif.create(
          folderPath,
          '2.article.js',
          () => 'export default '
            + JSON.stringify({
              id,
              content: 'still nope'
            })
        )
        await fileMotif.copy(
          (global[FRAMEWORK_PATH] === STANDALONE
            ? ''
            : 'node_modules/motifs-js/')
            + 'logo.svg',
          folderPath + '/demo.svg'
        )
        
        const articles = await get()

        return articles.findIndex(article =>
          article.id === id
            && article.images.length === 1
            && article.images[0]
              .includes('demo.svg')
        ) > -1
      }
    }
  ]
}