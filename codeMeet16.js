function askForMissingDetails(list) {
  let result = []
  list.forEach(p => {
    let q = false
    Object.entries(p).forEach(e => {
      if(e[1] === null){
        p.question = `Hi, could you please provide your ${e[0]}.`
        q = true
      }
    })
    if(q) result.push(p)
  })
  return result
}