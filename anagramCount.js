const w = readline().toLowerCase()

const map = [...w].reduce((a, c) => ((a[c] = ++a[c] || 1), a), {})
const n = parseInt(readline())
let count = 0
for (let i = 0; i < n; i++) {
	const s = readline().toLowerCase()
	const m = [...s].reduce((a, c) => ((a[c] = ++a[c] || 1), a), {})

	if ([...w].every((e) => map[e] <= m[e])) count++
	// print(s, count)
}

print(count)
