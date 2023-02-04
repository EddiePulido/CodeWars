const n = parseInt(readline());
const m = parseInt(readline());

const isPrime = n => {
    if(n <= 1) return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false
    }
    return true
}

const arr = []

for(let i = n; i <= m; i++){
    if(isPrime(i)) arr.push(i)
}

print(arr.join(' ') || -1)