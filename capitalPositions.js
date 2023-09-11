const s = readline()

const isChar = c => c.toLowerCase() !== c.toUpperCase()
const arr = []

for(let i = 0; i < s.length; i++){
    if(isChar(s[i]) && s[i] === s[i].toUpperCase()){
        arr.push(i)
    }
}

console.log(arr.join(',') || 'None')