const chirp = (n) => {
	if (!n) return ''

	if (n === 1) return 'chirp'

	return 'chirp-' + chirp(n - 1)
}
