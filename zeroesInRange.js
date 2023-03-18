const N = parseInt(readline());
const M = parseInt(readline());

let count = 0

const countZeroes = s => [...s].reduce((a,c) => c =='0' ? ++a : a, 0)

for(let i = N; i <= M; i++){
    count += countZeroes(i.toString(2))
}

print(count)