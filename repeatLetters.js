
const X = readline();
const map = {}

let str = ''

for(c of X){
    if(!map[c]){
        map[c] = 1
        str += c

    } else{
        map[c]++
        str += c.repeat(map[c])
    }
}

console.log(str);
