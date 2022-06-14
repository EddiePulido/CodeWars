function capitalize(s){
  const first = s.split('').map((c,i) => i % 2 === 0 ? c.toUpperCase() : c).join('')
  const second = s.split('').map((c,i) => i % 2 === 1 ? c.toUpperCase() : c).join('')
  
  return [first,second]
};