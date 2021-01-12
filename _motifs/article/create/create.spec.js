import fileMotif from "../../file/file.motif.js";
import folderMotif from "../../folder/folder.motif.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import create from "./create.js";
import fs from "fs"
import getFiles from "../../motif/init/_utils/getFiles/getFiles.js"
import exclusionRules from "../../motif/init/exclusionRules.js";
import { EXCLUDE, INCLUDE } from "../../motif/init/_utils/getFiles/_enums/rules/rules.enum.js";
import { FILES, PROJECT_PATH } from "../../global/_enums/names/global.names.enum.js";

async function createFirstArticle(path, start) {
  
  await folderMotif.create(
    '_tests',
    path,
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
                start,
                folderScope => [
                  fileMotif.create(
                    folderScope,
                    start + '.article.js',
                    () => 'export default { id: "' + start + '" }'
                  )
                ]
              ) 
            ]
          )
        ]
      )
    ]
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

        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles(
          '',
          {
            ...exclusionRules,
            '_tests': INCLUDE,
            '_motifs': EXCLUDE
          })
        await create({ scope: '_tests/' + path })
        global[FILES] = global['_' + FILES]

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

        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles(
          '',
          {
            ...exclusionRules,
            '_tests': INCLUDE,
            '_motifs': EXCLUDE
          })
        await create({ scope: '_tests/' + path })
        global[FILES] = global['_' + FILES]

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

        global['_' + FILES] = global[FILES]
        global[FILES] = getFiles(
          '',
          {
            ...exclusionRules,
            '_tests': INCLUDE,
            '_motifs': EXCLUDE
          })
        await create({ scope: '_tests/' + path })
        global[FILES] = global['_' + FILES]

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