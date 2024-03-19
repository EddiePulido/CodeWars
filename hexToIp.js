const hex = readline().slice(2)

let arr = []

for(let i = 0; i < hex.length; i += 2){
    arr.push(hex.slice(i, i +2))
}

print(arr.map(e => parseInt(e, 16)).join('.'))