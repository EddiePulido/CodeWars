function solve(s){
  return [...s].reduce((a,c) => {
    let isChar = c.toLowerCase() !== c.toUpperCase()
    
    if(isChar && c === c.toUpperCase()) 
      a[0]++
    else if(isChar && c === c.toLowerCase()) 
      a[1]++
    else if(Number.isInteger(+c))   
      a[2]++
    else 
      a[3]++
    return a
  }, [0,0,0,0])    
} 