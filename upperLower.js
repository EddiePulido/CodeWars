function solve(s){
  let lower = 0
  let upper = 0
  
  s.split('').forEach(c => {
    c.toUpperCase() === c ? upper++ : lower++
    })

  console.log({upper, lower})
  
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}