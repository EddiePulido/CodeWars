const T = readline().toLowerCase()

const d = '0123456789'

const isChar = c => c.toLowerCase() !== c.toUpperCase() || d.includes(c)
const x = [...T].filter(isChar).join('')

const isPal = s => s.split('').reverse().join('') === s

if(isPal(x)){
    console.log([...T].filter(e => !isChar(e)).length)
}else{
    console.log([...T].filter(isChar).length)
}