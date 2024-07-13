const number = readline()

console.log([...number].reduce((a,c) => a + c ** 2, 0))