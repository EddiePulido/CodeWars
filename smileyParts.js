
const smiley = readline();
let eyes = 0
let mouth = 0

for(c of smiley){
    if(c === ':') eyes++
    if(c === ')' || c === '(') mouth++
}

if(eyes != mouth) print('Oh no!')
else print(':)'.repeat(eyes))
