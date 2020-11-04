import FILE from "../../../file/file.motif.js";
import formatEnum from "../../../../_shrine/get/_enums/format/format.enum.js";

export default () =>

  new Promise(resolve =>
    
    Promise.all([ 
      FILE.get(
        '/_readme/_provision/readme.provision.js',
        {
          format: formatEnum.FUNCTION
        }
      ),
      FILE.get(
        '/_readme/_mapping/readme.mapping.js',
        {
          format: formatEnum.FUNCTION
        }
      )
    ])
    
      .then(([ provision, mapping ]) =>
      
        resolve({
          provision,
          mapping
        })))