import FOLDER from "../../../folder/folder.kami.js";
import FILE from "../../../file/file.kami.js";

export default (
  scope = '',
  mapping,
  options
) =>

  new Promise(resolve =>
    
    FOLDER.create(
      scope,
      '_build',
      folderScope => ([
        FILE.create(
          folderScope,
          'index.html',
          folderScope => `Hello world !`,
          options
        )
      ])
    )
    .then(resolve))