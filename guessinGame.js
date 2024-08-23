const maxNum = parseInt(readline())
let min = 1
let max = maxNum
const numOfAttempts = parseInt(readline())
for (let i = 0; i < numOfAttempts; i++) {
	const [g, h] = readline().split(' ')
	const guess = +g.split(':')[1]
	const hint = h.split(':')[1]

	if (hint === 'higher') {
		min = guess + 1
	} else {
		max = guess - 1
	}
	const arr = []
	for (let i = min; i <= max; i++) {
		arr.push(i)
	}

	print(arr.join(' '))
}
