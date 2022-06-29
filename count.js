function count(array){
  const hash = {}
  array.forEach(e => {
    hash[e] ? hash[e]++ : hash[e] = 1
  })
  return hash
}