const input = readline();

const isChar = c => c.toLowerCase() !== c.toUpperCase()
const d = '0123456789'

console.log([...input].map(e => isChar(e) || d.includes(e) ? 1 : 0).join(''))