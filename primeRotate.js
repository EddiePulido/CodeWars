const n = parseInt(readline());
const s = readline();

const isPrime = num => {
    if(num === 2) return true

    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0) return true
    }

    return false
}

if(!isPrime(n)){
    console.log(s.slice(-1) + s.slice(0,-1))
}else{
    console.log(s.slice(1) + s[0])
}