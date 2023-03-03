const s = readline().split(' ')

let str = ''

for(c of s){
    str += c[0]
}

for(let i = s.length-1; i >= 0;i--){
    str += s[i].slice(-1)
}

print(str)