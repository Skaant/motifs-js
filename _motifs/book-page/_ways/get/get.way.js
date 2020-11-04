import INSTANCE from '../../../instance/instance.motif.js'
import PAGE from "../../book-page.motif.js";
import formatEnum from "../../../get/_enums/format/format.enum.js";

export default (scope, options) => 

  new Promise(resolve =>

    INSTANCE.get(
      PAGE,
      {
        ...options,
        format: formatEnum.ESM,
        scope: scope
      }
    )

      .then(pages =>
        
        pages.length > 0
        
          ? (Promise.all(pages.map(page =>
          
            PAGE.provision(page, options)))

            .then(resolve))
            
          : resolve(false)))