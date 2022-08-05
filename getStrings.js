function getStrings(city){
  city = city.toLowerCase()
  const arr = []
  const hash = {}
  
  for(l of city){
    if(!arr.includes(l)) arr.push(l)
    hash[l] = ++hash[l] || 1
  }
  
  return arr.filter(c => c != ' ').map(c => c + ':' + '*'.repeat(hash[c])).join(',')
  
}