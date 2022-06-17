function goodVsEvil(good, evil){
  const g = {
    0 : 1,
    1 : 2,
    2 : 3,
    3 : 3,
    4 : 4,
    5 : 10
  }
  
  const e = {
    0 : 1,
    1 : 2,
    2 : 2,
    3 : 2,
    4 : 3,
    5 : 5,
    6 : 10
  }
  
  let gScore = good.split(' ').reduce((acc, c, i) => acc + Number(c) * g[i], 0)
  let eScore = evil.split(' ').reduce((acc, c, i) => acc + Number(c) * e[i], 0)
  
  return gScore > eScore ? "Battle Result: Good triumphs over Evil" :
         eScore > gScore ? "Battle Result: Evil eradicates all trace of Good" : 
        "Battle Result: No victor on this battle field"
}