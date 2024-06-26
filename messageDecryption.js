let m = readline()

const arr = m.split('')
if (m.length % 2) {
	for (let i = 1; i < arr.length; i += 2) {
		const temp = arr[i]
		arr[i] = arr[i + 1]
		arr[i + 1] = temp
	}
	arr.push(arr.shift())
} else {
	for (let i = 0; i < arr.length; i += 2) {
		const temp = arr[i]
		arr[i] = arr[i + 1]
		arr[i + 1] = temp
	}
}

m = arr.join('')
print(m)
