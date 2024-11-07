const x = parseInt(readline())
const y = parseInt(readline())

const f = n => {
    let p = 1

    for(let i = 1; i <= n; i++){
        p *= i
    }

    return p
}

console.log(f(y) / f(y - x))