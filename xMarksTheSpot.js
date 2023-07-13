const x = n => {
  let i = 0
  let j = n - 1
  
  const map = []
  
  while(j >= 0){
    map.push(Array.from({length: n}, (_,idx) => idx === i || idx === j ? 1 : 0))
    i++,j--
  }
  return map
}
