const r = parseInt(readline())
const n = parseInt(readline())
const map = {
	Gumball: 4,
	Chocolate: 7,
	Jellybeans: 10,
	Cotton_Candy: 11,
}

let s = 0
for (let i = 0; i < n; i++) {
	const l = readline()

	s += map[l]
}

if (s - r > 5) {
	print('Too Sweet!')
} else if (Math.abs(s - r) <= 5) {
	print('Just Right.')
} else if (r - s >= 6) {
	print('Blegh!')
} else {
	print('Invalid Input.')
}
