const count = parseInt(readline());
var inputs = readline().split(' ');

let u = [...new Set(inputs)].reduce((a,c) => a + +c, 0)
for (let i = 0; i < count; i++) {
    const n = parseInt(inputs[i]);
}


const isPrime = n => {
    if(n < 2) return false
    if(n === 2) return true
    if(n % 2 === 0) return false

    for(let i = 3; i < n; i++){
        if(n % i === 0) return false
    }

    return true
}

console.log(isPrime(u) ? u + ' is prime' : u + ' is composite');
