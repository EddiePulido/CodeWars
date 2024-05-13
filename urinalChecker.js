const s = readline()

let count = 0

for(let i = 0; i < s.length; i++){
    if(s[i] === 'O' && ((i == 0 || s[i-1] === 'O') && (i == s.length -1 || s[i+1] == 'O'))){
        count++
    }
}

console.log(count)