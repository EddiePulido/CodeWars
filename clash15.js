/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let map = {}
const sentence = readline();
let set = new Set(sentence)
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const line = readline().split(' ')
    map[line[1]] = line[0]
}
let arr = Object.entries(map).map(e => [e[0], e[1]]).sort((a,b) => a[0] - b[0])
let newMap = arr.reduce((a,c,i) => (a[i] = c[1], a), {})

for(let i = 0; i < n; i++){
    let sent = [...sentence].map(e => newMap[i] === e ? e : '_').join('')
    print(sent)
}