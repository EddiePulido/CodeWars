const S = readline();
const v='aeiouAEIOU'

const vowels = [...S].filter(e => v.includes(e))

let result = ''

for(c of S){
    if(v.includes(c)) result += vowels.pop()
    else result += c
}

console.log(result)