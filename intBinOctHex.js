const N = parseInt(readline())
const bin = N.toString(2).slice(0,-1)
const octal = parseInt(bin,2).toString(8).slice(0,-1)
const hex = parseInt(octal,8).toString(16).slice(0,-1)

console.log(parseInt(hex,16))