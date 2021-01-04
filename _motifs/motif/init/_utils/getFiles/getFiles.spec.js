import folderMotif from "../../../../folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import getFiles from "./getFiles.js";
import fileMotif from '../../../../file/file.motif.js'
import { EXCLUDE } from "./_enums/rules/rules.enum.js";

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

            await folderMotif.create(
              '_tests',
              'empty-folder',
              () => []
            )
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

            await folderMotif.create(
              '_tests',
              'exclude-file-at-root',
              folderScope => [
                fileMotif.create(
                  folderScope,
                  '.gitignore',
                  fileScope => 'to exclude',
                ),
                fileMotif.create(
                  folderScope,
                  'index.js',
                  fileScope => 'to include',
                )
              ]
            )
            
            const result = getFiles(
              '_tests/exclude-file-at-root',
              {
                '.gitignore': EXCLUDE
              })

            return result.findIndex(item =>
                item.includes('index.js')) === 0
              && result.findIndex(item =>
                item.includes('.gitignore')) === -1
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Can exclude some folders',
      group: []
    },
    {
      type: FEATURE,
      label: 'Can re-include files from an excluded folder',
      group: []
    },
    {
      type: FEATURE,
      label: 'Can re-include folders from an excluded one',
      group: []
    }
  ],
}