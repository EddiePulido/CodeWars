function towerBuilder(nFloors) {
  if(nFloors === 1) return ['*']
  
  const arr = []
  
  let spaces = nFloors - 1
  
  
  
  for(let i = 1; arr.length < nFloors; i+=2){
    const str = ' '.repeat(spaces)
    const stars = '*'.repeat(i)
    
    arr.push(str + stars + str)
    spaces--
  }
  
  return arr
}