import INSTANCE from "../../../../../../_shrine/instance/instance.kami.js";
import BOOK_PAGE from "../../book-page.motif.js";
import formatEnum from "../../../../../get/_enums/format/format.enum.js";

export default (scope, options) => 

  new Promise(resolve =>

    INSTANCE.get(
      BOOK_PAGE,
      {
        ...options,
        format: formatEnum.ESM,
        scope: scope
      }
    )

      .then(pages =>
        
        pages.length > 0
        
          ? (Promise.all(pages.map(page =>
          
            BOOK_PAGE.provision(page, options)))

            .then(resolve))
            
          : resolve(false)))