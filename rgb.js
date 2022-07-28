function rgb(r, g, b){
  r = r < 0 ? '00' : r <= 256 ? r.toString(16).toUpperCase() : 'FF'
  g = g < 0 ? '00' : g <= 256 ? g.toString(16).toUpperCase() : 'FF'
  b = b < 0 ? '00' : b <= 256 ? b.toString(16).toUpperCase() : 'FF'
  
  r = r.length === 1 ? '0' + r : r
  g = g.length === 1 ? '0' + g : g
  b = b.length === 1 ? '0' + b : b
  
  return r + g + b
}