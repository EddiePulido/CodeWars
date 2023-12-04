const n = parseInt(readline())
const b = [...n.toString(2)].sort().reverse().join('')

print(parseInt(b,2))
