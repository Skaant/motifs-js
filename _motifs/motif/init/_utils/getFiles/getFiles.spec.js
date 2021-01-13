import folderMotif from "../../../../folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import getFiles from "./getFiles.js";
import fileMotif from '../../../../file/file.motif.js'
import { EXCLUDE, INCLUDE } from "./_enums/rules/rules.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Returns an array of files path.',
      group: [
        {
          type: CASE,
          label: 'Returns an empty array if no dirents can be '
            + 'found in given scope.',
          test: async () => {

            await folderMotif.create('_tests/empty-folder')
            const result = getFiles('_tests/empty-folder')

            return Array.isArray(result)
              && result.length === 0
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Can exclude some files',
      group: [
        {
          type: CASE,
          label: 'Exclude a file at the root',
          test: async () => {
            const folderPath = '_tests/exclude-file-at-root'
            await folderMotif.create(folderPath)
            await fileMotif.create(
              folderPath,
              '.gitignore',
              () => 'to exclude',
            )
            await fileMotif.create(
              folderPath,
              'index.js',
              () => 'to include',
            )
            
            const result = getFiles(
              '_tests/exclude-file-at-root',
              {
                '.gitignore': EXCLUDE
              })

            return result.findIndex(item =>
                item.endsWith('index.js')) === 0
              && result.findIndex(item =>
                item.endsWith('.gitignore')) === -1
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Can exclude some folders',
      group: [
        {
          type: CASE,
          label: 'Exclude a folder at root',
          test: async () => {
            const folderPath = '_tests/exclude-folder-at-root'
            await folderMotif.create(folderPath)
            await fileMotif.create(
              folderPath,
              'index.js',
              () => 'to include',
            )
            await folderMotif.create(folderPath + '/node_modules')
            
            const result = getFiles(
              '_tests/exclude-folder-at-root',
              {
                'node_modules': EXCLUDE
              })

            return result.findIndex(item =>
                item.endsWith('index.js')) === 0
              && result.findIndex(item =>
                item.endsWith('node_modules')) === -1
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Can re-include files from an excluded folder',
      group: [
        {
          type: CASE,
          label: 'Exclude a folder at root but '
            + ' include a file inside it.',
          test: async () => {
            const folderPath = '_tests/re-include-file-at-root'
            await folderMotif.create(folderPath)
            await fileMotif.create(
              folderPath,
              'index.js',
              () => 'to include',
            )
            const nestedFolderPath = folderPath + '/_build'
            await folderMotif.create(nestedFolderPath)
            await fileMotif.create(
              nestedFolderPath,
              'meta-data',
              () => 'to include'
            )
            await fileMotif.create(
              nestedFolderPath,
              'index.html',
              () => 'to exclude'
            )
            
            const results = getFiles(
              '_tests/re-include-file-at-root',
              {
                '_build': {
                  rule: EXCLUDE,
                  subs: {
                    'meta-data': INCLUDE
                  }
                }
              })

            return results.findIndex(item =>
                item.endsWith('index.js')) >= 0
              && results.findIndex(item =>
                item.endsWith('meta-data')) >= 0
              && results.findIndex(item =>
                item.endsWith('index.html')) === -1
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Can re-include folders from an excluded one',
      group: [
        {
          type: CASE,
          label: 'Exclude a folder at root but '
            + ' include a folder inside it.',
          test: async () => {
            const folderPath = '_tests/re-include-folder-at-root'
            await folderMotif.create(folderPath)
            await fileMotif.create(
              folderPath,
              'index.js',
              () => 'to include',
            )
            const nestedFolderPath = folderPath + '/node_modules'
            await folderMotif.create(nestedFolderPath)
            const n2FolderPath1 = nestedFolderPath + '/motifs-js'
            await folderMotif.create(n2FolderPath1)
            await fileMotif.create(
              n2FolderPath1,
              'motif.motif.js',
              () => 'to include'
            )
            const n2FolderPath2 = nestedFolderPath + '/showdown'
            await folderMotif.create(n2FolderPath2)
            await fileMotif.create(
              n2FolderPath2,
              'file-1',
              () => 'to exclude'
            )
            
            const results = getFiles(
              '_tests/re-include-folder-at-root',
              {
                'node_modules': {
                  rule: EXCLUDE,
                  subs: {
                    'motifs-js': INCLUDE
                  }
                }
              })

            return results.findIndex(item =>
                item.endsWith('index.js')) >= 0
              /* && results.findIndex(item =>
                item.endsWith('node_modules')) >= 0 */
              && results.findIndex(item =>
                item.endsWith('node_modules/motifs-js')) >= 0
              && results.findIndex(item =>
                item.endsWith('node_modules/motifs-js/motif.motif.js')) >= 0
              && results.findIndex(item =>
                item.endsWith('node_modules/showdown')) === -1
              && results.findIndex(item =>
                item.endsWith('node_modules/showdown/file-1')) === -1
          }
        }
      ]
    }
  ],
}