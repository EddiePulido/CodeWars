const S = readline()

const d = '0123456789'
let bool = true

console.log([...S].filter((n,i,a) => {
    if(n + a[i+1] === '/*') bool = false
    if(n + a[i+1] === '*/') bool = true
    return bool && d.includes(n)
}).length)