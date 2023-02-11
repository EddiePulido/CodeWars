// You must halve the length of a line of text, but the proportions and ordering of characters must be the same. Round up should there be an odd number of characters of a certain type.

const S = readline();
const l = S.length
const h = Math.ceil(l / 2)
const a = S.slice(0, h)
const b = S.slice(h, l)
print(a)
print(b)

