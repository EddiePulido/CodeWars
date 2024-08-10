const route = readline()
// print(route)
// const set = new Set()
// let count = 1
// let x = [0,0]

// const map = {
//     '^': [0,1]  , '>': [1,0], 'v': [0, -1], '<': [-1,0]
// }

// for(c of route){
//     x[0] += map[c][0]
//     x[1] += map[c][1]

//     if(set.has(x.join(''))) count++
//     set.add(x.join(''))
// }

// print(count)
function maxVisits(route) {
	let x = 0,
		y = 0
	const visited = new Map()
	let maxVisits = 1

	const key = (x, y) => `${x},${y}`
	visited.set(key(x, y), 1)

	for (const move of route) {
		switch (move) {
			case '^':
				y++
				break
			case 'v':
				y--
				break
			case '>':
				x++
				break
			case '<':
				x--
				break
		}
		const pos = key(x, y)
		visited.set(pos, (visited.get(pos) || 0) + 1)
		maxVisits = Math.max(maxVisits, visited.get(pos))
	}

	return maxVisits
}

console.log(maxVisits(route))
