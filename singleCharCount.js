const s = readline().toLowerCase()

const map = [...s].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

let count = 0

for(key in map){
    if(map[key] === 1 && key !== ' ') count++
}

console.log(count)