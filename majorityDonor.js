const n = parseInt(readline())
const names = readline().split(' ')
const map = [...names].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

let b = 0

let m = ''

for(k in map){
    if(map[k] > n/2) m = k
}

print(m || 'conspiracy')