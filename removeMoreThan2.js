r = readline
t = +r()
while (t--) {
	x = r()
	m = [...x].reduce((a, c) => ((a[c] = ++a[c] || 1), a), {})
	print([...x].filter((e) => m[e] < 3).join('') || 'EMPTY')
}
