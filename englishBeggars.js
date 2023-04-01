function beggars(values, n){
  if(!n) return []
  let curr = 0
  
  return values.reduce((a,c) => {
    a[curr] += c
    curr = ++curr % n
    return a
  }, Array(n).fill(0))
}