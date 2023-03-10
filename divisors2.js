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