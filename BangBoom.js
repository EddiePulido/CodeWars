function multiple(x) {
  if(!(x % 15)) return 'BangBoom'
  if(!(x % 3)) return 'Bang'
  if(!(x % 5)) return 'Boom'
  return 'Miss'
}