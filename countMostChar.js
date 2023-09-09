const words = readline();
const count = [...words].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

let max = 0
let maxChar = 0

for(key in count){
    if(key !== ' ' && count[key] > max){
        max = count[key]
        maxChar = key
    }
}

console.log([...words].filter(e => e === maxChar).length)