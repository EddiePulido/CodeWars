const numbers = readline().split(' ').map(e=> +e)

let max = Math.max(...numbers)
let min = Math.min(...numbers)

print(Math.floor(max/min))