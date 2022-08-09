const findAll = (array, n) => {
  const result = []
  
  array.forEach((e, i) => {
    if(e === n) result.push(i)
  })
  
  return result
}