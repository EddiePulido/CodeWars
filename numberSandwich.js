const n = readline();
// print(n)

const isChar = c => c.toLowerCase() !== c.toUpperCase()

let i = 0
let j = n.length - 1
let usable = true

if(!isChar(n[0]) || !isChar(n[j])){
    usable = false
}


if(usable){
    while(isChar(n[i])){
        i++
    }
    while(isChar(n[j])){
        j--
    }
    usable = [...n].slice(i,j+1).every(e => !isChar(e))

}
if(usable){
    print(j+1 - i)
}else{
    print([...n].reduce((a,c) => a + +(isChar(c)), 0))
}