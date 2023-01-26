const n1 = readline();
const n2 = readline();

let s = (parseInt(n1,2) & parseInt(n2,2)).toString(2)
print('0'.repeat(n1.length - s.length) + s)