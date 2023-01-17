/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const givenSentence = readline();
const typedSentence = readline();
const time = parseInt(readline());

let words = typedSentence.length

let correct = 0

for(let i = 0; i < givenSentence.length; i++){
    if(givenSentence[i] === typedSentence[i]) correct++
}


console.log(Math.round((60/time) * (words/5)) + ' WPM');
console.log(((correct/givenSentence.length) * 100).toFixed(1) + ' %');
