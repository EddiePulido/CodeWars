const word = readline()

const v = 'aeiou'
const c = 'bcdfghjklmnpqrstvwxyz'

let result = ''

const [e, con, vow] = [...word].reverse()
let end = ''

const map = {
    e: `i:${con}`,
    a: `ei${con}`,
    i: `ai${con}`,
    o: `eu${con}`,
    u: `yu:${con}`
}
console.log(word.slice(0,-3) + map[vow])