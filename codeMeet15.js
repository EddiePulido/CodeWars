function findOddNames(list) {
  return list.filter(p => {
     return x = p.firstName.split('').reduce((a,i) => a + i.charCodeAt(0), 0) % 2 === 1
  })
  
}