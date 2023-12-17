const a = readline().split(' ')

let s = ""

for(let i = 0; i < a.length; i+= 2){
    s += String.fromCharCode(+a[i] + 64).repeat(+a[i+1])
}

console.log(s)