const T = readline().split('#')

let arr = T.map(e => e.length)

console.log(Math.min(...arr));