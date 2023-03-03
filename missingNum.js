let s  = '0123456789'
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const line = readline().split('').sort().join('')

    for(let i = 0; i < line; i++){
        if(line[i] !== s[i]) {
            print(s[i])
            break
        }
    }
}




