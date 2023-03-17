const n = parseInt(readline())
const poly = readline().split(' ')
a = +poly[0]
b = +poly[1]

for(let i = 1; i <= n; i++){
    print(i * a + b)
}