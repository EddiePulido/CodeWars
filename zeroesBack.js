const n = parseInt(readline());
var inputs = readline().split(' ');

const z = inputs.filter(e => e == 0)
const x = inputs.filter(e => e != 0)

print((x.concat(z)).join(' '))
