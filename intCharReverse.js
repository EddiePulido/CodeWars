const S = readline();

const isChar = c => c.toLowerCase() !== c.toUpperCase()

let nums = [...S].reduce((a,c) => +c ? a + +c : a, 0)
let letters = [...S].filter(e => isChar(e)).reverse().join('')

console.log(nums + letters)
