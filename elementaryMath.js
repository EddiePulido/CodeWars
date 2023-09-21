const x = parseInt(readline());
var inputs = readline().split(' ').map(Number)

const odds = inputs.filter((e) => e % 2).reduce((a,c) => a + c, 0)
const evens = inputs.filter((e) => e % 2 === 0).reduce((a,c) => a + c, 0)
const middle = inputs[Math.floor(inputs.length/2)]
const result = evens * odds + middle ** 2

console.log(`${evens} x ${odds} + ${middle}^2 = ${result}`)
