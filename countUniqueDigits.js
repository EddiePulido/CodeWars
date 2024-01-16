const str = readline()
let count = 0

let map = [...str].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

let d = '0123456789'

if([...str].some(e => !d.includes(e))) print('string should only contain digits')
else print(Object.values(map).reduce((a,c) => a + +(c == 1), 0) || 'No one is single')