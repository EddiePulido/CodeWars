r = readline
n = +r()
for (i = 0; i < n; i++) {
	a = +r()
	print(
		a > 25
			? 'Too old'
			: a < 19
			? 'Too young'
			: `Just perfect for Leonardo DiCaprisun, ${25 - a} years left until 25`
	)
}
