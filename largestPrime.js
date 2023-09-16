const N = parseInt(readline());

const isPrime = n => {
    if(n < 2) return false

    for(let i = 2; i <= Math.sqrt(n);i++){
        if(n % i === 0) return false
    }

    return true;
}
let arr = []
for (let i = 0; i < N; i++) {
    const x = parseInt(readline());
    if(isPrime(x)) arr.push(x)
}



console.log(Math.max(...arr));
