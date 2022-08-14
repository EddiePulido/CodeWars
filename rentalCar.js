function rentalCarCost(d) {
  let total = 0
  
  switch (true) {
      case d >= 7:
      total = (d * 40) -50;
      break;
      
      case d >= 3:
      total = (d * 40) - 20;
      break;
      
      default:
      total = d * 40;
      
  }
  return total
  
}

console.log(rentalCarCost(3))