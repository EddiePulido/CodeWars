let s = 'abcdefghijklmnopqrstuvwxyz'
let r = s.split('').reverse().join('')

let map = [...s].reduce((a,c,i) => (a[c] = r[i], a), {})

s = s.toUpperCase()
r = r.toUpperCase()

map = [...s].reduce((a,c,i) => (a[c] = r[i], a), map)

let nums = '0123456789'
let bums = nums.split('').reverse()

map = [...nums].reduce((a,c,i) => (a[c] = bums[i], a), map)
const t = readline();
map['('] = ')'
map[')'] = '('
map['['] = ']'
map[']'] = '['
map['{'] = '}'
map['}'] = '{'


print([...t].map(e => e in map ? map[e] : e).join(''))
