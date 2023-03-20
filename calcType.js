function calcType(a, b, res) {
  const map = {}
  map[a + b] = 'addition'
  map[a - b] = 'subtraction'
  map[a * b] = 'multiplication'
  map[a / b] = 'division'
  
  return map[res]
}