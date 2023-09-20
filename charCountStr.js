let p = readline()
p = p.split(' ').join('')
let str = ''

for(let i = 0; i < p.length; i++){
    let char = p[i]
    let count = 0

    while(p[i] === char){
        count++
        i++
    }
    i--
    str += count
}

console.log(str)