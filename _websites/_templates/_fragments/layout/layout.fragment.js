export default (
  data,
  {
    title,
    description,
    content
  }) => `<!DOCTYPE html>
<html lang=${ data.lang }>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="${ description }">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${ title }</title>
    <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body class='bg-fresh'>
    <nav class="navbar position-absolute d-flex justify-content-between align-items-center">
      <a class="navbar-brand mt-2 mr-3 text-white font-epic bg-fresh px-2" href="/">
        MOTIFS</a>
    </nav>
    ${ content }
  </body>
</html>`