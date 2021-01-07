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

        await folderMotif.create(
          '_tests',
          'article-no-scope-test',
          folderScope => [

            folderMotif.create(
              folderScope,
              '_data',
              folderScope => [
            
                folderMotif.create(
                  folderScope,
                  'articles',
                  folderScope => [
                    folderMotif.create(
                      folderScope,
                      '1',
                      folderScope => [
                        fileMotif.create(
                          folderScope,
                          '1.article.js',
                          folderScope =>
                            'export default { id: "article-no-scope-test" }'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
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

        await folderMotif.create(
          '_tests',
          'article-content-md',
          folderScope => [

            folderMotif.create(
              folderScope,
              '_data',
              folderScope => [
            
                folderMotif.create(
                  folderScope,
                  'articles',
                  folderScope => [
                    folderMotif.create(
                      folderScope,
                      '1',
                      folderScope => [
                        fileMotif.create(
                          folderScope,
                          '1.article.js',
                          () => 'export default { '
                            + 'id: "article-content-md", '
                            + 'content: "nope" }'
                        ),
                        fileMotif.create(
                          folderScope,
                          'content.md',
                          () => 'ok'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
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