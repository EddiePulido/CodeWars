function sumDigPow(a, b) {
  let arr = []
  
  for(let i = a; i <= b; i++){
    let str = String(i)
    if(str.length === 1){
      
      arr.push(i)
    }else{
      let sum = 0
      str.split('').forEach((d,i) => {
        sum += Number(d) ** (i+1)
      })
      if(sum === i) arr.push(i)
    }
    
    
  }
  
  return arr
  
}