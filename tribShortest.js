n = +readline()
f = (n, m = { 0: 0, 1: 1, 2: 1 }) => {
	if (n in m) return m[n]
	m[n] = f(n - 3, m) + f(n - 2, m) + f(n - 1, m)
	return m[n]
}
print(n < 0 ? 'Incorrect input' : f(n))
