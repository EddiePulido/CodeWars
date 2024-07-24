n = +readline()
p = (n) => {
	for (i = 2; i * i <= n; i++) if (n % i == 0) return false
	return n > 1
}
x = n - 1
y = n + 1
while (!p(x) || !p(y)) {
	if (!p(x)) x--
	if (!p(y)) y++
}
a = (x + y) / 2
print(n == a ? 'BALANCED' : n > a ? 'STRONG' : 'WEAK')
