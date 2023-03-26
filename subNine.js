const N = readline();

console.log([...N].map(e => +e > 9 - +e ? 9 - +e : e).join(''));