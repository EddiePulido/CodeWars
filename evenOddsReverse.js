
const n = parseInt(readline());
var inputs = readline().split(' ').map(Number)

const e = inputs.filter(e => e % 2 === 0)
const o = inputs.filter(e => e % 2)



console.log(e.concat(o).join(' '))