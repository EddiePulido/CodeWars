const n = parseInt(readline())
const arr = readline().split(' ').map(Number)
const prod = arr.reduce((a,c) => a * c, 1)
const prodZero = arr.reduce((a,c) => c === 0 ? a : a * c, 1)

console.log(arr.map(num => num === 0 ? prodZero : prod / num).join(' '))
