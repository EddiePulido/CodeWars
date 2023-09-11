const ip = readline();

const isChar = c => c.toLowerCase() !== c.toUpperCase()
let d = ' >='

let ans = `print(${[...ip].filter(e => isChar(e) || d.includes(e)).join('')})`

console.log(ans !== 'print()' ? ans : 'None')