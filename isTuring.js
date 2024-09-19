function isTuringEquation(s) {
	const rev = (n) => [...n].reverse().join('')

	const [a, b, c] = s.match(/\d+/g).map(rev)

	return +a + +b === +c
}
