const l = readline().split('')

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(l.map((e,i) => String.fromCharCode(e.charCodeAt() + i)).join(''));
