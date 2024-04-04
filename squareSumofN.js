
const n = parseInt(readline());
let s = 0
for(let i = 2; i <= n; i+=2){
    s += i ** 2
}

console.log(s)