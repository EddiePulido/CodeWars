const s = readline();
const al = 'abcdefghijklmnopqrstuvwxyz0123456789'

const output = s.split('').filter(e => al.includes(e.toLowerCase()));
const nums = s.split('').filter(e => !isNaN(e)).sort();

console.log(output.sort().filter(e => isNaN(e)).concat(nums).join(''))