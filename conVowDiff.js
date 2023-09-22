const S = readline().toLowerCase()

const v = 'aeiou'
const isChar = c => c.toLowerCase() !== c.toUpperCase()

const vow = [...S].filter(e => v.includes(e)).length
const con = [...S].filter(e => isChar(e) && !v.includes(e)).length

console.log(Math.abs(vow-con))