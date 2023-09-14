const N = parseInt(readline());

let best = 'NONE'
let diff = -Infinity
for (let i = 0; i < N; i++) {
    const [name, start, end] = readline().split(' ')

    let percent = (end - start) / start * 100

    if(percent > diff){
        diff = percent
        best = name
    }
}

console.log(best)