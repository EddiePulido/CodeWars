function parseHTMLColor(color) {
  color = (PRESET_COLORS[color.toLowerCase()] || color).slice(1)
  
  const convert = n => parseInt(n.length === 1 ? n+n : n, 16)

  if(color.length === 3){
    const [r,g,b] = [...color]
    return { r: convert(r), g: convert(g), b: convert(b) }
  }
  
  const r = convert(color.slice(0,2))
  const g = convert(color.slice(2,4))
  const b = convert(color.slice(4))
  
  return { r:r, g:g, b:b }
}