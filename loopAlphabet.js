const i = parseInt(readline()) + 1

const a = 'abcdefghijklmnopqrstuvwxyz'

let j = i
let bool = true
console.log('a')
while(bool){
    let index = j % 26
    console.log(a[index])
    if(a[index] === 'a' || a[index] === 'z') bool = false

    j+= i
}
