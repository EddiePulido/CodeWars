const N = parseInt(readline());
let energy = 0
for (let i = 0; i < N; i++) {
    const A = parseInt(readline());
    energy -= A
}

console.log(energy)