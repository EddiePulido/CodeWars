const n = parseInt(readline());
const map = {}
for (let i = 0; i < n; i++) {
    const T = readline();
    map[T] = ++map[T] || 1
}

let max = 0
let color = ''
let multiple = false

for(k in map){
    if(map[k] > max){
        color = k
        max = map[k]
        multiple = false
    }else if(map[k] === max){
        multiple = true
    }
}

console.log((multiple ? 'Multiple ' : color + ' ') + max  )
