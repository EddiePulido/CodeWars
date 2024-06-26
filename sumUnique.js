const n = parseInt(readline());
var arr = readline().split(' ').map(Number)

const map = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
let s = 0
for(k in map){
    if(map[k] === 1){
        s += +k
    }
}

print(s)