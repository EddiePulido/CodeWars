const N = parseInt(readline());

let sum = 0
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const value = parseInt(readline());
        if(j > i) sum += value
    }
}

console.log(sum)