import { promises as fs } from 'fs'
import fileMotif from '../../../../file/file.motif.js';
import { FILES } from '../../../../global/_enums/names/global.names.enum.js';
import { FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import folderMotif from "../../../folder.motif.js";
import removeFolder from './removeFolder.js';

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Given a path, removes it.',
      test: async () => {
        // Create mock content
        const folderPath = '_tests/remove-folder-and-content--folder-ent'
        await folderMotif.create(folderPath)
        // Check folder has been created
        await fs.stat(folderPath)
        // Execution
        await removeFolder(folderPath)
        try {
          // Check folder has been deleted
          await fs.stat(folderPath)
          return false
        } catch (err) {
          return err.code === 'ENOENT'
        }
      }
    },
    {
      type: FEATURE,
      label: 'While removing a folder, also removes its content.',
      test: async () => {
        // Create mock content
        const folderPath = '_tests/remove-folder-and-content--content-ents'
        await folderMotif.create(folderPath)
        const file1Name = 'requests.data.js'
        await fileMotif.create(
          folderPath,
          file1Name,
          () => 'export default [ { time: "28/8/1888", content: "yellow" } ]'
        )
        const file2Name = 'description.md'
        await fileMotif.create(
          folderPath,
          file2Name,
          () => '# HIGHBS-BOK'
        )
        // Check files has been created
        await fs.stat(folderPath + '/' + file1Name)
        await fs.stat(folderPath + '/' + file2Name)
        // Execution
        await removeFolder(folderPath)
        // Check files has been deleted
        const errors = []
        try {
          await fs.stat(folderPath + '/' + file1Name)
          return false
        } catch (err) {
          errors.push(err)
        }
        try {
          await fs.stat(folderPath + '/' + file2Name)
          return false
        } catch (err) {
           errors.push(err)
        }
        return errors.every(err =>
          err.code === 'ENOENT')
      }
    },
    {
      type: FEATURE,
      label: 'Removes path occurence in `global[FILES]`.',
      test: async () => {
        // Create mock content
        const folderPath = '_tests/remove-folder-and-content--folder-path'
        await folderMotif.create(folderPath)
        // Check folder path is present in global[FILES]
        global[FILES].some(path => path === folderPath)
        // Execution
        removeFolder(folderPath)
        // Check folder path is absent from global[FILES]
        return !global[FILES].every(path => path === folderPath)
      }
    },
    {
      type: FEATURE,
      label: 'Also removes folder content occurences in `global[FILES]`',
      test: async () => {
        // Create mock content
        const folderPath = '_tests/remove-folder-and-content--content-path'
        await folderMotif.create(folderPath)
        const filePath = 'test.txt'
        await fileMotif.create(
          folderPath,
          filePath,
          () => 'let me disappear'
        )
        const fullFilePath = folderPath + '/' + filePath
        // Check file path is present in global[FILES]
        global[FILES].some(path => path === fullFilePath)
        // Execution
        removeFolder(folderPath)
        // Check folder path is absent from global[FILES]
        return !global[FILES].every(path => path === fullFilePath)
      }
    }
  ]
}