const T = readline().split(' ')

console.log(T.map(e => [...e].reverse().join('')).join(' '))