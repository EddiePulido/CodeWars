const word = readline()
const arr = [
    `1234567890-=`,
    `qwertyuiop[]\\`,
    `asdfghjkl;'`,
    `zxcvbnm,./`,
]


print(arr.some(e => [...word].every(c => e.includes(c))) ? 'Yes' : 'No')