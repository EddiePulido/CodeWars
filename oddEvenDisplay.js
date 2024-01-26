const a = readline().split(',').map(Number)

const odds = a.reduce((a,c) => c % 2 ? a + c : a, 0)
const evens = a.reduce((a,c) => c % 2 ? a : a + c, 0)

console.log(`${odds} ${evens}`);
