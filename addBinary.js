/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = readline();
const b = readline();

function addBinary(a, b) {
    // Convert binary numbers to decimal BigInts
    let num1 = BigInt('0b' + a);
    let num2 = BigInt('0b' + b);
  
    // Add BigInts together
    let sum = num1 + num2;
  
    // Convert sum back to binary string and return
    return sum.toString(2);
  }

console.log(addBinary(a,b));
