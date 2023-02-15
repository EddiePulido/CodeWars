
const s = readline();
const r = [...s].reverse().join('')

let a = ''

for(let i = 0; i < s.length; i++){
    a += s[i]
    a += r[i]
}

print(a)