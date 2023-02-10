/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = parseInt(readline());
const b = parseInt(readline());

function isLeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      return true;
    }
    return false;
  }
  

let count = 0

for(let i = a; i <= b; i++){
    if(isLeapYear(i)) count++
}
print(count)