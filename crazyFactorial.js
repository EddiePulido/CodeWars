const n = parseInt(readline());

let f = 1

for(let i = 1; i <= n; i++){
    f *= i
}

let sum = [...f.toString()].reduce((a,c) => a + +c, 0)

console.log(f / sum)