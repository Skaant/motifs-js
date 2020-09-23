import analyzeAssertions from '../analyzeAssertions/analyzeAssertions.util.js'

export default (
  id,
  [
    kamiSpecs,
    instancesSpecs
  ]) => {

  let ran = 0
  let kos = []

  kamiSpecs
    && kamiSpecs.forEach(assertions => {

      const {
        ran: _ran,
        kos: _kos
      } = analyzeAssertions(id, assertions)

      ran += _ran;
      kos = kos.concat(_kos)
    })

    instancesSpecs
      && instancesSpecs.forEach(({ id, specs }) => {

        specs.forEach(assertions => {

          const {
            ran: _ran,
            kos: _kos
          } = analyzeAssertions(id, assertions)
    
          ran += _ran;
          kos = kos.concat(_kos)
        })
      })

  return {
    ran,
    kos
  }
}