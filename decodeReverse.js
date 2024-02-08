const message = readline().split(' ')

arr = [...message].map(e=> String.fromCharCode(+e)).join('')

console.log(arr.split(' ').map(e => [...e].reverse().join('')).join(' '))