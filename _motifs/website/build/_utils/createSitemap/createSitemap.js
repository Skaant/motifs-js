import fileMotif from "../../../../file/file.motif.js";
import jsontoxml from 'jsontoxml'

/**
 * @param {string} path 
 * @param {Array<{name:'url',children:{loc:string,lastmod?:string,changefreq?:string,priority?:number}}>} sitemap
 *  Formated for `jsontoxml` syntax
 */
export default async (path, sitemap) =>
  await fileMotif.create(
    path,
    'sitemap.xml',
    () => jsontoxml(
      {
        urlset: [ ...sitemap ]
      },
      { xmlHeader: true })
  )