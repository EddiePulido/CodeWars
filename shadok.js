const n = parseInt(readline())
const arr = []
for (let i = 0; i < n; i++) {
	const x = parseInt(readline())
	arr.push(x)
}

function decimalToShadok(n, numbers) {
	const shadokDigits = ['GA', 'BU', 'ZO', 'MEU']

	function toShadok(num) {
		if (num === 0) return shadokDigits[0]
		let result = ''
		while (num > 0) {
			result = shadokDigits[num % 4] + result
			num = Math.floor(num / 4)
		}
		return result
	}

	let translations = []
	for (let i = 0; i < n; i++) {
		translations.push(toShadok(numbers[i]))
	}
	return translations
}

const result = decimalToShadok(n, arr)

for (e of result) {
	print(e)
}
