const chars = readline();
const s = readline();
const toGet = readline();

console.log([...toGet].map(e => s[chars.indexOf(e)]).join(''))