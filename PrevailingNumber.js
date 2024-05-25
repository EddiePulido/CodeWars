const count = parseInt(readline());
const a = []
for (let i = 0; i < count; i++) {
    const n = parseInt(readline());

    a.push(n)
}

const map = {}

let result = ''

for(e of a){
    map[e] = ++map[e] || 1

    if(map[e] > Math.floor(count/2)){
        result = e
        break
    }
}

print(result ? e : 'N')