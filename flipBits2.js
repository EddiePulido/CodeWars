const n = parseInt(readline());

const map = { 1: '0', 0: '1'}

console.log(parseInt(n.toString(2).split('').map(e => map[e]).join(''),2));