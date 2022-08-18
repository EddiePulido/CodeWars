function product(values) {
  if(!values || values.length === 0) return null
  
  return values.reduce((acc, c) => acc * c, 1)
}