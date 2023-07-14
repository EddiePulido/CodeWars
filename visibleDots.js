function totalAmountVisible(topNum, sides){
  const sum = sides * (sides+1) / 2
  
  return sum - (sides + 1 - topNum)
}