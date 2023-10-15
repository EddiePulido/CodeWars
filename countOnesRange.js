const n = parseInt(readline())
let c = 0
for(let i = 0; i <= n; i++){
    c += [...(i+'')].reduce((a,c) => a + +(c == 1), 0)
}

console.log(c)