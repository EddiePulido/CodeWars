/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const TEXT = readline();

for(let i = 0; i < TEXT.length-N+1; i++){
    print(TEXT.slice(i,i+N))
}