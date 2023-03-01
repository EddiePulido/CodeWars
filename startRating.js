
const N = readline().split(',')

let num = N.reduce((a,c) => a + +c, 0) / N.length

console.log('*'.repeat(Math.floor(num)));
