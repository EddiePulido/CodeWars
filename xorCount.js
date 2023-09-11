var inputs = readline().split(' ')
const m = parseInt(inputs[0])
const n = parseInt(inputs[1])

const max = Math.max(m,n)

let count = 0

for(let i = 1; i <= max; i++){
    if(n % i === 0 && m % i) count++
    if(m % i === 0 && n % i) count++
}

console.log(count)