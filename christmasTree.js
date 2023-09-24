const N = parseInt(readline())
const w = N * 2 + 1


for(let i = 0; i < N; i++){
    let stars = i * 2 + 1
    let dots = (w - stars)/2
    console.log('.'.repeat(dots) + '*'.repeat(stars) + '.'.repeat(dots))
}

let d = (w - 1) / 2
console.log('.'.repeat(d) + '*' + '.'.repeat(d))