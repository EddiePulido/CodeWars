const n = parseInt(readline());

let s = ''

for (let i = 0; i < n; i++) {
    const statement = readline();
    s += +eval(statement)
}



console.log(parseInt(s.split('').reverse().join(''),2));
