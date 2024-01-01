const N = parseInt(readline())
let sum = 1
for(let i = 1; i <= N; i+=2){
    sum *= i
}

console.log(sum)
