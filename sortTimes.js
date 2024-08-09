const n = parseInt(readline())
const arr = []
for (let i = 0; i < n; i++) {
	const [player, percent, time] = readline().split(' ')
	arr.push([player, percent, time])
}

arr.sort(([p, per, t], [p2, per2, t2]) => {
	b = +per2.slice(0, -1)
	a = +per.slice(0, -1)
	time1 = +t.split(':')[0] * 60 + +t.split(':')[1]
	time2 = +t2.split(':')[0] * 60 + +t2.split(':')[1]

	if (a === b) {
		return time1 - time2
	}

	return b - a
})

for (e of arr) {
	console.log(e.join(' '))
}
