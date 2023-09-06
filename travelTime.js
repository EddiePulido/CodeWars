const [depHour, depMin] = readline().split(':').map(Number)
const [arrHour, arrMin] = readline().split(':').map(Number)

console.log((arrHour * 60 + arrMin) - (depHour * 60 + depMin));