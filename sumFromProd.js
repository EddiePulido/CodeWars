
const N = readline().split('')

let sum = N.reduce((a,c) => a + +c, 0)
let prod = N.reduce((a,c) => a * +c, 1)

print(prod - sum)
