function rentalCarCost(d) {
  let cost = d * 40
  
  return d >= 7 ? cost - 50 : d >= 3 ? cost - 20 : cost
}