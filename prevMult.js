const prevMultOfThree = n => {
  let str = n.toString()
  
  while(str.length){
    if(+str % 3 === 0) return +str
    str = str.slice(0,-1)
  }
  
  return null
}