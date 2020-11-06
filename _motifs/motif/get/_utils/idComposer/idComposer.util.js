import PANTHEON from "../../../../pantheon/pantheon.motif.js";

export default kami =>

  kami.parents
    ? ([
      ...kami.parents,
      kami.id
    ]).reduce(
      (composedId, id, index) =>
      
        (id === PANTHEON.id
          && !index)
          ? composedId
          
          : (composedId
            ? composedId
              + '-' + id
              
            : id),
      '')

    : kami.id