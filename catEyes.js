/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     let row = readline();
     row = [...row].map(e => e === 'o' ? 'x' : e).join('')
 
     console.log(row)
 }
 