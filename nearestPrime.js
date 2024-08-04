const n = parseInt(readline())

const prime = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false
	}

	return n >= 2
}

let i = n - 1
let j = n + 1

while (!prime(i) && !prime(j)) {
	i--
	j++
}

if (prime(n)) {
	console.log(n)
} else if (prime(i)) {
	console.log(i)
} else {
	console.log(j)
}
