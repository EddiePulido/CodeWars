const code = readline().split('|')
const alpha = ' abcdefghijklmnopqrstuvwxyz'
const arr = code.map(e => {
    const nums = e.split(',')

    const x = nums.reduce((a,c) => a + +c, 0)

    return x
})

console.log(arr.map(e => {
    return alpha[e % 26]
}).join(''))