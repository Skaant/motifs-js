import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FILES } from "../../global/_enums/names/global.names.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import get from "./get.js";
import getFiles from "../../motif/init/_utils/getFiles/getFiles.js"
import exclusionRules from "motifs-js/_motifs/motif/init/exclusionRules.js";
import { INCLUDE } from "motifs-js/_motifs/motif/init/_utils/getFiles/_enums/rules/rules.enum.js";

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
          'logo.svg',
          folderPath + '/demo.svg'
        )
        
        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles('', {
          ...exclusionRules,
          '_tests': INCLUDE
        })
        const articles = await get()
        global[FILES] = global['_' + FILES]

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