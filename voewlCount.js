let map = {
  a : 0,
  e : 0,
  i : 0,
  o : 0,
  u : 0,
}

const s = readline().toLowerCase()

for(c of s){
  map[c]++
}

let arr = 'aeiou'.split('')

print(arr.map(e => map[e]).join(' '))