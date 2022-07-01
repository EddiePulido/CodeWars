function stockList(listOfArt, listOfCat){
  let result = ''
  if(listOfArt.length == 0 || listOfCat.length === 0) return ''
  
  listOfCat.forEach(c => {
    let arr = listOfArt.filter(art => art[0] === c)
    let amount = arr.reduce((a,x) => a + Number(x.split(' ')[1]), 0)
    
    result += `(${c} : ${amount}) - ` 
  })
  
  return result.slice(0, -3)
  
}