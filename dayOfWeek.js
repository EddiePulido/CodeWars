const d = readline()
const n = parseInt(readline())

const arr = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

let idx = arr.indexOf(d)

console.log(arr[(idx + n) % 7])
