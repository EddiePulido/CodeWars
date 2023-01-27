
const s = readline().toLowerCase().split('')

const map = s.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

let set = [...new Set(s)]

for(n of set){
    print(n + ' ' + map[n])
}
