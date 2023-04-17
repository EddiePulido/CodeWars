function parseHTMLColor(color) {
  color = PRESET_COLORS[color.toLowerCase()] || color

  if(color.length === 4){
    const [other,r,g,b] = [...color]
    return {r: parseInt(r+r,16), g: parseInt(g+g,16), b: parseInt(b+b,16)}
  }
  
  const r = parseInt(color.slice(1,3),16)
  const g = parseInt(color.slice(3,5),16)
  const b = parseInt(color.slice(5),16)
  
  return {r:r,g:g,b:b}
  
}