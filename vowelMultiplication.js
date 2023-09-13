const s = readline();

const v = 'aeiouy'
const vowels = [...s].filter(e => v.includes(e))

console.log(vowels.reduce((a,c) => a + c.charCodeAt(), 0) * vowels.length)