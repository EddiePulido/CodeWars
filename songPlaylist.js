const length = parseInt(readline()) * 60
const keyPhrase = readline().toLowerCase()
const l = parseInt(readline())
let total = 0
for (let i = 0; i < l; i++) {
	const [tit, length] = readline().split(', ')
	if (!tit.toLowerCase().includes(keyPhrase)) total += +length
	// print({keyPhrase, tit})
}

if (total < length) {
	print(length - total)
} else {
	print('Long Enough')
}
