const p = parseInt(readline());
const h = parseInt(readline());
const r = parseInt(readline());

let money = p * h

console.log(r - money === 0 ? 'BARELY' : r - money > 0 ? 'NO' : 'YES');
