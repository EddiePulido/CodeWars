function gimme (triplet) {
  const map = {}
  
  triplet.forEach((n,i) => {
    map[n] = i
  })
  
  triplet.sort((a,b) => a - b)
  
  return map[triplet[1]]
}