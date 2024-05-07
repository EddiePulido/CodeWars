let [vow, cons] = readline().split(' ')
const s = readline();

const v = [...vow].reverse().join('')
const c = [...cons].reverse().join('')

const map = {}

for(let i = 0; i < vow.length; i++){
    map[v[i]] = vow[i]
}

for(let i = 0; i < cons.length; i++){
    map[c[i]] = cons[i]
}


console.log([...s].map(e => {

    if(!map[e.toLowerCase()]) return e
    let bool = false
    if(e === e.toUpperCase()) bool = true
    let result = map[e.toLowerCase()]

    return bool ? result.toUpperCase() : result

}).join(''))