const i = parseInt(readline());
const s = readline();
let a = 'abcdefghijklmnopqrstuvwxyz'
console.log([...s].map(e => a[(a.indexOf(e)+i) % 26] ).join(''))
