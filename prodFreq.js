const S = readline();

let map = [...S].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})



console.log(Object.values(map).reduce((a,c) => a * c, 1));
