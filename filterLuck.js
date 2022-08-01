const filterLucky = x =>{
  const containsSev = n => n.toString().includes('7')
  
  return x.filter(n => containsSev(n))
}