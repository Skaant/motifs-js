import fileMotif from "../../../../file/file.motif.js"

/**
 * @param {string} path
 *  Website folder's path.
 * @param {string[]} disallows
 *  An array of path to disallow
 *  (must start with `/`).
 * @param {string} url
 *  Website's url.
 */
export default async (path, disallows, url) => {
  await fileMotif.create(
    path,
    'robots.txt',
    () => `User-agent: *
${
  disallows.map(disallow =>
    'Disallow: ' + disallow)
    .join('\n')
}
Sitemap: ${ url }/sitemap.xml`
  )
}