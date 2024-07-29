const length = parseInt(readline())

const frame = []
let heart = 0

for (let i = 0; i < length; i++) {
	var inputs = readline().split(' ')
	for (let j = 0; j < length; j++) {
		const x = parseInt(inputs[j])

		if (i === 0 || i === length - 1 || j === 0 || j === length - 1) {
			frame.push(x)
		}

		if (i === Math.floor(length / 2) && j === Math.floor(length / 2)) {
			heart = x
		}
	}
}

console.log(Math.max(...frame) === heart)
