function lostSheep(friday,saturday,total){
  return total - (friday.reduce((acc,c) => acc + c, 0) + saturday.reduce((acc,c) => acc + c, 0))
}