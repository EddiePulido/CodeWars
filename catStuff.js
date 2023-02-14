const N = parseInt(readline());
const P = parseInt(readline());
const C = parseInt(readline());
const R = parseInt(readline());


let sum = 0

for(let i = 1; i <= N; i++){
    sum += P
    sum += C + ((i - 1) * 2)
    sum += R
}

print(sum)