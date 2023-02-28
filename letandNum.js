const s = readline();

let d = '0123456789'

let nums = [...s].filter(e => d.includes(e)).reduce((a,c) => a + +c, 0)
let le = [...s].filter(e => !d.includes(e)).join('')

print(le)
print(nums) 