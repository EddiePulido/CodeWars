const N = parseInt(readline());
const C = readline();

let s = 1

let final = N * 2 - 1


for(let i = 1; i <= N; i++ ){
    print(' '.repeat(N-i) + C.repeat(s))
    s += 2
}

