const n = parseInt(readline())

const p = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false
	}

	return n >= 2
}

let primes = []
let i = 2

while (primes.length !== n) {
	if (p(i)) primes.push(i)
	i++
}

console.log(primes.reduce((a, c) => a + c, 0))
