const s = readline()

const map = {
	a: 'e',
	b: 'p',
	d: 'q',
	m: 'w',
	n: 'u',
	s: 'z',
	e: 'a',
	p: 'b',
	q: 'd',
	w: 'm',
	u: 'n',
	z: 's',
}

console.log([...s].map((e) => map[e] || e).join(''))
