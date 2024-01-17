const fib = (n, map={}) => {
  if(n in map) return map[n]
  if(n === 1) return 1
  if(n === 0) return 0

  
  map[n] = fib(n-1, map) + fib(n-2, map)
  
  return map[n]
};