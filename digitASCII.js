const S = readline();

let d = '0123456789'
let isChar = c => c.toLowerCase() !== c.toUpperCase()

const digits = [...S].filter(e => d.includes(e))

if(digits.length){
    print(digits.join(''))
}else{
    print([...S].reduce((a,c) => c === c.toUpperCase() && isChar(c) ? a + c.charCodeAt() : a, 0))
}