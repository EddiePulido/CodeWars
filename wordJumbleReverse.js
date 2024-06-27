const s = readline()

let result = ''
if (s.length % 2 === 0) {
	for (let i = s.length - 1; i >= 0; i -= 2) {
		result += s[i]
	}

	for (let i = 0; i < s.length; i += 2) {
		result += s[i]
	}
} else {
	for (let i = s.length - 2; i >= 0; i -= 2) {
		result += s[i]
	}
	for (let i = 0; i < s.length; i += 2) {
		result += s[i]
	}
}

print(result)
