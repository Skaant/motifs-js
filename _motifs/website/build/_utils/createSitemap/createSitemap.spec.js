import { CASE, FEATURE, MODULE } from "../../../../spec-section/_enums/type/spec-section.type.enum.js";
import createSitemap from "./createSitemap.js";
import { promises as fs } from 'fs'
import { PROJECT_PATH } from "../../../../global/_enums/names/global.names.enum.js";
import fileMotif from "../../../../file/file.motif.js";
import formatEnum from "../../../../get/_enums/format/format.enum.js";
import folderMotif from "../../../../folder/folder.motif.js";

export default {
  type: MODULE,
  group: [
    {
      type: FEATURE,
      label: 'Build a `sitemap.xml` file at given `path`.',
      test: async () => {
        const websitePath = '_tests/createSitemap-file-at-path'
        await folderMotif.create(websitePath)
        await createSitemap(websitePath, [])
        try {
          await fs.stat(global[PROJECT_PATH]
            + '/' + websitePath
            + '/sitemap.xml')
          return true
        } catch (err) {
          return false
        }
      }
    },
    {
      type: FEATURE,
      label: 'Sitemap content (XML) :',
      group: [
        {
          type: FEATURE,
          label: 'Top tag is `<urlset>`.',
          test: async () => {
            const websitePath = '_tests/createSitemap-content-urlset'
            await folderMotif.create(websitePath)
            await createSitemap(
              websitePath,
              [
                {
                  name: 'url',
                  children: {
                    loc: 'https://gharja.kampa'
                  }
                }
              ]
            )
            const { content } = await fileMotif.get(
              websitePath + '/sitemap.xml',
              { format: formatEnum.UTF_8 }
            )
            return content.includes('<urlset>')
              && content.endsWith('</urlset>')
          }
        },
        {
          type: FEATURE,
          label: 'Under `<urlset>` there is as much `<url>` tags '
            + 'as there is `url` nodes in given `sitemap` array.',
          group: [
            {
              type: CASE,
              label: 'Empty array',
              test: async () => {
                const websitePath = '_tests/createSitemap-content-url-0'
                await folderMotif.create(websitePath)
                await createSitemap(websitePath, [])
                const { content } = await fileMotif.get(
                  websitePath + '/sitemap.xml',
                  { format: formatEnum.UTF_8 }
                )
                return content.endsWith('<urlset/>')
              }
            },
            {
              type: CASE,
              label: '1-element array',
              test: async () => {
                const websitePath = '_tests/createSitemap-content-url-1'
                await folderMotif.create(websitePath)
                await createSitemap(
                  websitePath,
                  [{
                    name: 'url',
                    children: {
                      loc: 'https://odin.valhala'
                    }
                  }]
                )
                const { content } = await fileMotif.get(
                  websitePath + '/sitemap.xml',
                  { format: formatEnum.UTF_8 }
                )
                return content.match(/\<url\>\<loc\>https\:\/\/[\w-]*\.[\w-]*\<\/loc\>\<\/url\>/g).length === 1
              }
            },
            {
              type: CASE,
              label: '2-elements array',
              test: async () => {
                const websitePath = '_tests/createSitemap-content-url-2'
                await folderMotif.create(websitePath)
                await createSitemap(
                  websitePath,
                  [
                    {
                      name: 'url',
                      children: {
                        loc: 'https://hera.olympus'
                      }
                    },
                    {
                      name: 'url',
                      children: {
                        loc: 'https://poseidon.olympus'
                      }
                    }
                  ]
                )
                const { content } = await fileMotif.get(
                  websitePath + '/sitemap.xml',
                  { format: formatEnum.UTF_8 }
                )
                return content.match(/\<url\>\<loc\>https\:\/\/[\w-]*\.[\w-]*\<\/loc\>\<\/url\>/g).length === 2
              }
            }
          ]
        },
        {
          type: FEATURE,
          label: '`<url>` contains `<loc>` tag with given path string.',
          test: async () => {
            const websitePath = '_tests/createSitemap-url-loc'
            await folderMotif.create(websitePath)
            const loc = 'https://ultimo.gov.zkk'
            await createSitemap(
              websitePath,
              [
                {
                  name: 'url',
                  children: {
                    loc
                  }
                }
              ]
            )
            const { content } = await fileMotif.get(
              websitePath + '/sitemap.xml',
              { format: formatEnum.UTF_8 }
            )
            const result = content.match(/\<url\>\<loc\>(https\:\/\/[\w-]*\.[\w\.-]*)\<\/loc\>\<\/url\>/)
            return result[1]
              && result[1] === loc
          }
        },
        {
          type: FEATURE,
          label: '`<url>` contains any other optional tag given.',
          group: [
            {
              type: FEATURE,
              label: '`lastmod` is given in object.',
              test: async () => {
                const websitePath = '_tests/createSitemap-url-lastmod'
                await folderMotif.create(websitePath)
                const lastmod = '2021-03-02'
                await createSitemap(
                  websitePath,
                  [
                    {
                      name: 'url',
                      children: {
                        loc: 'https://wang.mei',
                        lastmod
                      }
                    }
                  ]
                )
                const { content } = await fileMotif.get(
                  websitePath + '/sitemap.xml',
                  { format: formatEnum.UTF_8 }
                )
                const result = content.match(/\<url\>.*\<lastmod\>(.*)\<\/lastmod\>\<\/url\>/)
                return result[1]
                  && result[1] === lastmod
              }
            }
          ]
        }
      ]
    }
  ]
}