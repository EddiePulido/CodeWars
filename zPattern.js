const input = readline()
const x = +input.slice(0, -1)
const char = input.slice(-1)

for (let i = 0; i < x; i++) {
	if (i === 0 || i === x - 1) {
		console.log(char.repeat(x))
	} else {
		console.log(' '.repeat(x - i - 1) + char)
	}
}
