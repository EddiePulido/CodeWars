const counts = {}

const N = parseInt(readline())
for (let i = 0; i < N; i++) {
	const favorites = readline().split(' ')

	for (const e of favorites) {
		counts[e] = ++counts[e] || 1
	}
}

console.log(
	Object.entries(counts)
		.filter(([k, v]) => v === N)
		.map((e) => e[0])
		.sort()
		.join(' ') || 'None'
)
