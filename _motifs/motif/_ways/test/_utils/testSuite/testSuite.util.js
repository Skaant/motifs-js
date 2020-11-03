/**
 * Execute a test suite against
 *  given KAMI (second parameter, `kami`) :
 * 
 * * `kami` matches its specific SPECS (`kami._specs()`),
 * * `kami`'s instances match `kami` SPECS (`kami.specs()`).
 * 
 * @param {KAMI} kami Is the KAMI, and its instances if any,
 *  to test against its own SPECS.
 */
export default kami =>

  Promise.all([
    /** Disabled. Is given KAMI a CORRECT KAMI ?
     *  (Is kami matching KAMI'S INSTANCES-SPECS ?)
     * 
     * Duplicates with kami.id === KAMI
     *  && kami.specs().
     * 
     * ```
     * ...KAMI.specs
     *  .map(spec => spec(kami)),
     * ``` */

    /** 1. Does given KAMI has SPECIFIC-SPECS
     *  && if it does, run its SPECS. */
    kami._specs
      && Promise.all(kami._specs
        .map(spec => spec(kami))),

    /** 2. If KAMIS can retrieve its instances (GET),
     *  && if it also have INSTANCES-SPECS
     *  && run the SPECS on all retrieved instances.
     */
    kami.get
      && kami.specs
      && new Promise(resolve =>
        
        kami.get(kami)
          .then(instances =>
            
            Promise.all(instances.map(instance =>
              
              new Promise(resolve =>
                
                Promise.all(kami.specs
                  .map(spec => spec(instance)))
                
                .then(instanceSpecs =>
                  
                  resolve({
                    id: instance.id,
                    specs: instanceSpecs
                  })))))

              .then(resolve)))
  ])