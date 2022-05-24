function rowWeights(array){
  
  let team1 = array[0] ? array.filter((val, index) => index % 2 === 0).reduce((a,i) => a + i) : 0
  let team2 = array[1] ? array.filter((val, index) => index % 2 === 1).reduce((a,i) => a + i) : 0
  
  return [team1,team2]
}