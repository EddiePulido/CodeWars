

const input = readline();
let s = input.split(' ').join('')
let nums = '0123456789'
const isChar = c => c.toLowerCase() != c.toUpperCase()

let l = [...s].filter(e => isChar(e)).length
let n = [...s].filter(e => nums.includes(e)).length

print(Math.round(l/n))