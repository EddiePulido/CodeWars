

const message = readline();

let v = 'aeiouyAEIOUY'

let vowels = [...message].filter(e => v.includes(e))
let con = [...message].filter(e => e != ' ' && !v.includes(e))


print(vowels.join(''))
print(con.join(''))