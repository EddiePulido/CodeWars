const n = parseInt(readline());
let a = parseInt(readline());
const symbol = readline();

for(let i = 1; i <= n; i++){
    print(' '.repeat(a+i) + symbol.repeat(i))
}