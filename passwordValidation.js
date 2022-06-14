function validate(p) {
  const nums = '0123456789'
  let lower = false
  let upper = false
  let number = false
  let alpha = true
  
  if(p.length < 6) return false
  
  for(let i = 0; i < p.length; i++){
    const charCode = p[i].charCodeAt()
    if(charCode >= 97 && charCode <= 122) lower = true
    if(charCode >= 65 && charCode <= 90) upper = true
    if(nums.includes(p[i])) number = true
    if(!nums.includes(p[i]) && p[i].toLowerCase().charCodeAt() - 96 < 0 || p[i].toLowerCase().charCodeAt() - 96 > 26) alpha = false
  }
  
  return lower && upper && number && alpha
}