function cakes(recipe, available) {
  let min = Infinity
  let bool = true
  
  console.log({recipe, available})
  
  Object.keys(recipe).forEach(i => {
    if(!available[i]) bool = false
    let n = Math.floor(available[i] / recipe[i])
    min = Math.min(min, n)
  })
  
  return bool ? min : 0
}