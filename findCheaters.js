const n = parseInt(readline());

let map = {}
let arr = []

for(let i = 0; i < n; i++){
    const [a,b] = readline().split(' ')
    arr.push([a,b])    
    if(!(a in map)) map[a] = []
    if(!(b in map)) map[b] = []

    map[a].push(b)
    map[b].push(a)
}

let count = 0

for([x,y] of arr){
    if(map[x].length > 1 && map[y].length > 1) count++
}

console.log(count)