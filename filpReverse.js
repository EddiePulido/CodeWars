const s = readline();

let set = [...new Set(s)]
const map = {}
map[set[0]] = set[1]
map[set[1]] = set[0]

print([...s].map(e => map[e]).join(''))
