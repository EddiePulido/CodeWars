var inputs = readline().split(' ');
const l = parseInt(inputs[0]);
const b = parseInt(inputs[1]);
var inputs = readline().split(' ');
const x = parseInt(inputs[0]);
const y = parseInt(inputs[1]);

function findLargestCakePiece(length, breadth, x, y) {
    const area1 = x * y;
    const area2 = x * (breadth - y);
    const area3 = (length - x) * y;
    const area4 = (length - x) * (breadth - y);
  
    const maxArea = Math.max(area1, area2, area3, area4);
  
    return maxArea;
  }
  
console.log(findLargestCakePiece(l,b,x,y))