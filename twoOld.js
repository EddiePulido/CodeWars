function twoOldestAges(ages){
  let max = Math.max(ages[0], ages[1])
  let max2 = Math.min(ages[0], ages[1])
  
  for(let i = 2; i < ages.length; i++){
    const age = ages[i]
    if(age > max){
      let temp = max
      max = age
      max2 = temp
    }else if(age > max2){
      max2 = age
    }
  }
  
  return [max2, max]

}