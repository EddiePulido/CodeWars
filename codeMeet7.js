function findSenior(list) {
  let max = 0
  list.forEach(p => {
    if(p.age > max){
      max = p.age
    }
  })
  return list.filter(p => p.age === max)
}