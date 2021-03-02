import folderMotif from "../../../../folder/folder.motif.js";
import { CASE, FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import createRobots from "./createRobots.js";
import { promises as fs } from 'fs'
import { PROJECT_PATH } from "../../../../global/_enums/names/global.names.enum.js";
import fileMotif from "../../../../file/file.motif.js";
import formatEnum from "../../../../get/_enums/format/format.enum.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Creates a `robots.txt` file at given path.',
      test: async () => {
        const folderPath = '_tests/createRobots-file-at-path'
        await folderMotif.create(folderPath)
        await createRobots(
          folderPath,
          [],
          'https://lucky.you'
        )
        try {
          fs.stat(global[PROJECT_PATH]
            + '/' + folderPath
            + '/robots.txt')
          return true
        } catch (err) {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: '`robots.txt` content :',
      group: [
        {
          type: FEATURE,
          label: 'Content starts with the line `User-agent: *`',
          test: async () => {
            const folderPath = '_tests/createRobots-content-user-agent'
            await folderMotif.create(folderPath)
            await createRobots(
              folderPath,
              [],
              'https://nopo.hello'
            )
            const { content } = await fileMotif.get(
              folderPath + '/robots.txt',
              { format: formatEnum.UTF_8 }
            )
            return content.startsWith('User-agent: *\n')
          }
        },
        {
          type: FEATURE,
          label: 'Contains as much `Disallow: /...` lines as '
            + 'entries in given `disallows` array.',
          group: [
            {
              type: CASE,
              label: '0 entry.',
              test: async () => {
                const folderPath = '_tests/createRobots-content-disallows-0'
                await folderMotif.create(folderPath)
                await createRobots(
                  folderPath,
                  [],
                  'https://make-gaia-great-again.net'
                )
                const { content } = await fileMotif.get(
                  folderPath + '/robots.txt',
                  { format: formatEnum.UTF_8 }
                )
                return content.match(/Disallow\: .*\n/) === null
              }
            },
            {
              type: CASE,
              label: '1 entry.',
              test: async () => {
                const folderPath = '_tests/createRobots-content-disallows-1'
                await folderMotif.create(folderPath)
                await createRobots(
                  folderPath,
                  [ '/administration/' ],
                  'https://make-gaia-great-again.net'
                )
                const { content } = await fileMotif.get(
                  folderPath + '/robots.txt',
                  { format: formatEnum.UTF_8 }
                )
                return content.includes('Disallow: /administration/')
                  && content.match(/Disallow\: .*\n/).length === 1
              }
            }
          ]
        },
        {
          type: FEATURE,
          label: 'Content ends with the `sitemap.xml` link.',
          test: async () => {
            const folderPath = '_tests/createRobots-content-sitemap'
            await folderMotif.create(folderPath)
            const url = 'https://yanga.jeej'
            await createRobots(
              folderPath,
              [],
              url
            )
            const { content } = await fileMotif.get(
              folderPath + '/robots.txt',
              { format: formatEnum.UTF_8 }
            )
            return content.endsWith('\nSitemap: '
              + url + '/sitemap.xml')
          }
        }
      ]
    }
  ]
}