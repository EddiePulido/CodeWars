const n = parseInt(readline())

const prime = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false
	}
	return n >= 2
}

let product = BigInt(1)

for (let i = 2; i <= n; i++) {
	if (prime(i)) product *= BigInt(i)
}

console.log(product.toString())
