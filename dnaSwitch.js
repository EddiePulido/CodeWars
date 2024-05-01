/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const dna = readline();

const map = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C'
}


if([...dna].every(e => map[e])){
    console.log(dna)
    console.log('|'.repeat(n))
    console.log([...dna].map(e => map[e]).join(''))
}else{
    console.log('INVALID')
}

