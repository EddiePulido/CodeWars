function parseHTMLColor(color) {
  color = (PRESET_COLORS[color.toLowerCase()] || color).slice(1)
  
  const convert = n => parseInt(n.length === 1 ? n+n : n, 16)

  const [r, g, b] = color.length === 3 ? [...color].map(convert) : [color.slice(0, 2), color.slice(2, 4), color.slice(4)].map(convert)

  return { r, g, b }
}