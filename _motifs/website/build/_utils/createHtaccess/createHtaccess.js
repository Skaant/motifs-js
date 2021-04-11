import fileMotif from "../../../../file/file.motif.js";

/**
 * @param {string} path 
 * @param {string} url
 * @param {[source:string,target:string][]} redirects
 */
export default async (path, url, redirects) =>
  await fileMotif.create(
    path,
    '.htaccess',
    () => `
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ ${ url }/$1 [R,L]

${
  redirects
    ? redirects
      .map(([ source, target ]) =>
        'redirect 301 ' + source + ' ' + target)
      .join('\n')
    : ''
}`
  )