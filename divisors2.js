const n = parseInt(readline());

const getDivisors = n => {
    let arr = []

    for(let i = 1;i < n; i++){
        if(n % i === 0) arr.push(i)
    }

    return arr
}

let d = getDivisors(n)
let s = d.reduce((a,c) => a + c, 0)

if(n > s) print('deficient')
if(n < s) print('abundant')
if(n===s) print('perfect')

const isPrime = n => {
    if(n < 2) return false
    if(n === 2) return true
    if(n % 2 === 0) return false

    for(let i = 3; i < n; i++){
        if(n % i === 0) return false
    }

    return true
}