const stc = readline();
const v = 'aeiouyYAEIOU'
const isLet = c => c.toLowerCase() !== c.toUpperCase()
const vowels = [...stc].filter(e => v.includes(e)).join('').toLowerCase()
const cons = [...stc].filter(e => !v.includes(e) && isLet(e)).join('').toLowerCase()

console.log(vowels.length && cons.length ? `${vowels}${cons} ${vowels.length} ${cons.length}` : 'empty')