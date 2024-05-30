const s = readline().split(' ').map(Number)

const p = n => {
    if(n < 2) return false

    for(let i = 2; i <= Math.sqrt(n);i++){
        if(n % i === 0) return false
    }

    return true
}

console.log(s[0] === s.reduce((a,c) => p(c) ? a + c : a, 0))