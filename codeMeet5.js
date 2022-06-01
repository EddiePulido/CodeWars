function countLanguages(list) {
  let map = {}
  
  list.forEach(p => {
    map[p.language] ? map[p.language] += 1 : map[p.language] = 1
  })
  
  return map
}