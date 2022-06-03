function orderFood(list) {
  const map = {}
  
  list.forEach(p => {
    map[p.meal] ? map[p.meal] += 1 : map[p.meal] = 1
  })
  
  return map
}