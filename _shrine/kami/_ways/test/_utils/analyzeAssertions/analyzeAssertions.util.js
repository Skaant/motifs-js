export default (id, assertions) =>
  
  assertions.reduce(
    (acc, [ result, label ]) => {

      acc.ran++;
      
      !result && acc.kos.push({
        id,
        label
      })

      return acc
    },
    {
      ran: 0,
      kos: []
    })