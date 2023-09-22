const S = readline()
let str = ''
let s = S[0]
let count = 0

for(c of S){
    if(c === s){
        count++
    }else{
        str += count + s
        s = c
        count = 1
    }
}

console.log(str + count + s)