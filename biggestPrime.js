
const prime = n => {
  if(n <= 1) return false
  for(let i = 2; i <= Math.sqrt(n);i++){
      if(n % i === 0) return false
  }
  return true
}
const L = parseInt(readline());
var inputs = readline().split(' ');

let primes = []
for (let i = 0; i < L; i++) {
  const N = parseInt(inputs[i]);
  if(prime(N)) primes.push(N)
}

print(primes.length ? Math.max(...primes) : -1)
