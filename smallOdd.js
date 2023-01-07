
const line = readline().split(' ').sort((a,b) => a - b).filter(e => e % 2)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(line[0]);
