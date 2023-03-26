var ownedCatAndDog = function(cat, dog) {
  const human = (years, d) => {
    let result = 0
    if(years - 15 >= 0) result++
    years -= 15
    
    if(years - 9 >= 0) result++
    years -= 9

    years = years > 0 ? years : 0
    result += Math.floor(years / (d ? 5 : 4)) 

    return result
  }
  
  return [human(cat, false), human(dog, true)]
}