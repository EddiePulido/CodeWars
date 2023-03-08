var inputs = readline().split(' ');
const MMM = parseInt(inputs[0]);
const AAA = parseInt(inputs[1]);
let NNN = parseInt(inputs[2]);

let count = MMM
let i = 1

while(NNN){
    NNN--
    count += MMM * i++
}
// print({count,MMM,AAA,NNN})
let v = count - AAA - MMM
console.log(v > 0 ? v : 0);
