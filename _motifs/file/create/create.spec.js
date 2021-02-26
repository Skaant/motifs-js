import folderMotif from "../../folder/folder.motif.js";
import { FILES } from "../../global/_enums/names/global.names.enum.js";
import { FEATURE, MODULE } from "../../spec-section/_enums/type/spec-section.type.enum.js";
import create from "./create.js";
import { promises as fs } from 'fs'
import get from "../get/get.js";
import formatEnum from "../../get/_enums/format/format.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Given a path, name and content, '
        + 'creates a file.',
      group: [
        {
          type: FEATURE,
          label: 'File is created.',
          test: async () => {
            const folderPath = '_tests/file-create-file-is-present'
            await folderMotif.create(folderPath)
            const fileName = 'count.csv'
            await create(
              folderPath,
              fileName,
              () => '5,3,2,14')
            try {
              await fs.stat(folderPath
                + '/' + fileName)
              return true
            } catch (err) {
              return false
            }
          }
        },
        {
          type: FEATURE,
          label: 'Content is result of third '
            + 'parameter (callback) execution.',
          test: async () => {
            const folderPath = '_tests/file-create-content'
            await folderMotif.create(folderPath)
            const fileName = 'sum.txt'
            await create(
              folderPath,
              fileName,
              () => '2 + 5 = ' + (2 + 5))
            try {
              const filePath = folderPath
                + '/' + fileName
              await fs.stat(filePath)
              const { content } = await get(
                filePath,
                {
                  format: formatEnum.UTF_8
                })
              return content === '2 + 5 = 7'
            } catch (err) {
              return false
            }
          }
        }
      ]
    },
    {
      type: FEATURE,
      label: 'Adds the newly created file path in `global[FILES]`.',
      group: [
        {
          type: FEATURE,
          label: 'File path is present AND starts with a slash.',
          test: async () => {
            const folderPath = '_tests/file-create-path-is-present'
            await folderMotif.create(folderPath)
            const fileName = 'chaussettes.json'
            await create(
              folderPath,
              fileName,
              () => 'export default [ "blue", "yellow" ]')
            return global[FILES].indexOf('/' + folderPath
              + '/' + fileName) > -1
          }
        }
      ]
    }
  ]
}