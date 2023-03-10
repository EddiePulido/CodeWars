var inputs = readline().split(' ');
let HP1 = parseInt(inputs[0]);
let D1 = parseInt(inputs[1]);
var inputs = readline().split(' ');
let HP2 = parseInt(inputs[0]);
let D2 = parseInt(inputs[1]);

let round = 0
let winner = ''

while(HP1 > 0 && HP2 > 0){
    HP2 -= D1
    HP1 -= D2
    round ++
}

if(HP1 > 0) winner = '1'
else winner = '2'
console.log(winner + ' ' + round);
