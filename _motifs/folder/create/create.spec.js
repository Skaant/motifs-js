import create from './create.js'
import { CASE, FEATURE, MODULE } from '../../spec-section/_enums/type/spec-section.type.enum.js'
import fs from 'fs/promises'
import { PROJECT_PATH } from '../../global/_enums/names/global.names.enum.js'

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Create a folder to given path',
      group: [
        {
          type: CASE,
          label: 'Create a folder in an existing folder (nesting 1)',
          test: async () => {
            const path = '_tests/folder-create-in-existing'
            await create(path)
            try {
              await fs.stat(global[PROJECT_PATH] + '/' + path)
              return true
            } catch {
              return false
            }
          }
        },
        {
          type: CASE,
          label: 'Create a folder in a non-existing folder (nesting 2)',
          test: async () => {
            const path = '_tests/folder-create-in-non-existing-2/temp'
            await create(path)
            try {
              await fs.stat(global[PROJECT_PATH] + '/' + path)
              return true
            } catch {
              return false
            }
          }
        },
        {
          type: CASE,
          label: 'Create a folder in a non-existing folder (nesting 5)',
          test: async () => {
            const path = '_tests/folder-create-in-non-existing-5/a/b/c/temp'
            await create(path)
            try {
              await fs.stat(global[PROJECT_PATH] + '/' + path)
              return true
            } catch {
              return false
            }
          }
        }
      ]
    }
  ]
}