const a = readline();
const b = readline();

const diff = Math.abs(a.length - b.length)

console.log(Math.max(a.length,b.length) - diff/2)