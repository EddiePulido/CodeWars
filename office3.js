function broken(x){
  let map = {1 : 0, 0 : 1}
  return [...x].map(e => map[e]).join('')
}