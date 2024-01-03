const n = parseInt(readline());
const d = parseInt(readline());
const h = parseInt(readline());

console.log(n * h === d * 24 ? 'Just enough' : n * h > d * 24 ? 'It is enough' : 'Not enough')
