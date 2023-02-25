const str = readline().toLowerCase()
let map = [...str].reduce((a,c) => {
    if(c == ' ') return a
    a[c] = ++a[c] || 1
    return a
}, {})

let max = 0;
let lettter = ''

for(e in map){
    if(map[e] > max){
        max = map[e]
        letter = e
    }
}

print(letter + ' ' + max)