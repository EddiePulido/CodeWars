const password = readline()

const map = {
	lengthMax: (p, n) => p.length <= n,
	lengthMin: (p, n) => p.length >= n,
	include: (p, n) => [...p].some((c) => n.includes(c)),
	exclude: (p, n) => [...p].every((c) => !n.includes(c)),
}
const N = parseInt(readline())
let bool = true
let err = false

let min = -Infinity
let max = Infinity
let inc = ''
let ex = ''

for (let i = 0; i < N; i++) {
	const [con, val] = readline().split(' ')
	// print({con, val, password})
	if (!map[con](password, val)) {
		bool = false
	}

	if (con === 'include') {
		inc += val
	}

	if (con === 'exclude') {
		ex += val
	}

	if (con === 'lengthMin') {
		min = val
	}

	if (con === 'lengthMax') {
		max = val
	}
}

if (+max < +min) {
	err = true
}

if ([...ex].some((c) => inc.includes(c))) {
	err = true
}

// print({password, min, max, ex, inc, err})
if (err) {
	console.log('ERROR')
} else {
	console.log(bool ? 'VALID' : 'INVALID')
}
