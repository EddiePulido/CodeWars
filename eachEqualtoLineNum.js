const N = parseInt(readline());

let sum = 0
for (let i = 0; i < N; i++) {
    const row = readline()
    sum += row.split(' ').filter(e => +e === i).length
}

console.log(sum)