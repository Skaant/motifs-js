import { promises as fs } from 'fs'
import { PROJECT_PATH } from '../../global/_enums/names/global.names.enum.js'
import { FEATURE, MODULE } from '../../spec-section/_enums/type/spec-section.type.enum.js'
import folderMotif from '../folder.motif.js'
import { FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED, FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED } from './clear.errors.js'
import clear from "./clear.js"

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'When a single string path is given, '
        + 'removes target folder.',
      test: async () => {
        // preparation
        const folderPath = '_tests/folder-clear-single-path'
        await folderMotif.create(folderPath)
        await fs.stat(global[PROJECT_PATH]
          + '/' + folderPath)
        // execution
        await clear(folderPath)
        // analysis
        try {
          await fs.stat(global[PROJECT_PATH]
            + '/' + folderPath)
          return false
        } catch (err) {
          return err.code === 'ENOENT'
        }
      }
    },
    {
      type: FEATURE,
      label: 'When an array of string paths is given, '
        + 'removes all target folders.',
        test: async () => {
          // preparation
          const foldersPath = [
            '_tests/folder-clear-multiple-path-1',
            '_tests/zging',
          ]
          for (const path of foldersPath) {
            await folderMotif.create(path)
            await fs.stat(global[PROJECT_PATH]
              + '/' + path)
          }
          // execution
          await clear(foldersPath)
          // analysis
          return foldersPath.reduce(
            async (_acc, path) => {
              const acc = await _acc
              if (acc == true) return true
              try {
                await fs.stat(global[PROJECT_PATH]
                  + '/' + path)
                return true
              } catch (err) {
                return err.code === 'ENOENT'
              }
            },
            false
          )
        }
    },
    {
      type: FEATURE,
      label: 'When path is neither a string or an array, '
        + 'it should throw a '
        + FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED
        + ' exception.',
      /** @todo Replace with a `group` of `CASE` */
      test: async () => {
        try {
          await clear()
          return false
        } catch (err) {
          return err.message ===
            FOLDER_CLEAR_PATH_TYPE_NOT_RECOGNIZED
        }
      }
    },
    {
      type: FEATURE,
      label: 'If an item of a path array is not a string, '
        + 'it should throw a '
        + FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED
        + ' exception.',
      test: async () => {
        try {
          await clear([ 8 ])
          return false
        } catch (err) {
          return err.message ===
            FOLDER_CLEAR_NESTED_PATH_TYPE_NOT_RECOGNIZED
        }
      }
    }
  ]
}