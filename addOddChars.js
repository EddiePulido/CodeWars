const word = readline();

console.log([...word].reduce((a,c) => a + (c.charCodeAt() % 2 ? c.charCodeAt() : 0), 0))
