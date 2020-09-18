import FOLDER from "../../../folder/folder.kami.js";
import FILE from "../../../file/file.kami.js";

export default (
  scope = '',
  {
    provision,
    mapping,
    ...data
  },
  options
) =>

  new Promise(resolve =>

    provision().then(_data =>

      FOLDER.create(
        scope,
        '_build',
        folderScope => mapping(
          folderScope,
          {
            ...data,
            ..._data
          },
          options
        ))
      .then(resolve)))