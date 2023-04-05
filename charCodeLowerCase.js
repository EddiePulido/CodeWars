const s = readline();

let alpha = 'abcdefghijklmnopqrstuvwxyz'

console.log([...s].reduce((a,c) => alpha.includes(c) ?  a + c.charCodeAt() : a, 0));
