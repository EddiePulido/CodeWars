str = readline();
let a = 'abcdefghijklmnopqrstuvwxyz'


print([...str.toLowerCase()].map(e => a.includes(e) ? a.indexOf(e) + 1: e).join(''))