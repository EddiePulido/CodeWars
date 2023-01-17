const n = readline()


console.log(+n % [...n].reduce((a,c) => a + +c, 0) === 0)