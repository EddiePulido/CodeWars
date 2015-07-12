function catMouse(x){
  console.log({x})
  return x.length  <= 5 ? 'Caught!' : 'Escaped!'
}