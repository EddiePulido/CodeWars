const n = parseInt(readline())

function highestValue(N) {
	if (N < 2) return N
	if (N === 2) return 2
	if (N === 3) return 3
	let remainder = N % 3
	let quotient = Math.floor(N / 3)
	if (remainder === 1) {
		quotient--
		remainder += 3
	}
	return Math.pow(3, quotient) * (remainder > 0 ? remainder : 1)
}
print(highestValue(n))
