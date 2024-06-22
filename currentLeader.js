const s = readline()
const map = {}

let max = 0
let maxC = ''

let result = ''

for (c of s) {
	map[c] = ++map[c] || 1

	if (map[c] > max) {
		max = map[c]
		maxC = c
	}

	if (map[c] == max && maxC !== c) {
		maxC = '_'
	}

	result += maxC
}

console.log(result)
