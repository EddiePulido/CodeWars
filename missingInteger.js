const L = readline().split(' ')

const map = {}

for(c of L){
    map[c] = ++map[c] || 1
}

for(k in map){
    if(map[k] % 2 == 1) console.log(k) 
}
