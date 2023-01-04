const a = readline();
const b = readline();
const input = readline();

let map = {}
map[a] = b
map[b] = a

console.log([...input].map(e => map[e]).join(''))

