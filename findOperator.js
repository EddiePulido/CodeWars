const p = readline().split(' ')
let one = +p[0]
let two = +p[2]
let ans = p.pop()

const add = one + two
const sub = one - two
const mult = one * two
const div = one / two

const map = {}
map[add] = '+'
map[sub] = '-'
map[mult] = '*'
map[div] = '/'

console.log(map[ans]);
