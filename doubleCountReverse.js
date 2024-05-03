const words = readline();

console.log([...words].reduce((a,c,i) => {
    return c === words[i-1] ? a + 1 : a}, 0))