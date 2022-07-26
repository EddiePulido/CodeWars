function yearDays(year){
  const s = `${year} has `
  const e = ` days`
  
  const l = s + '366' + e
  const nl = s + '365' + e
  
  if(year % 100 === 0 && year % 400 != 0) return nl
  if(year % 4 === 0) return l
  return nl
}