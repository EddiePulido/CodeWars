const m = readline();

let str = ''

for(let i = 0; i < m.length-1; i+=2){
    str+= String.fromCharCode(+(m[i]+m[i+1]))
}
print(str)