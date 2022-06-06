function printerError(s) {
  let errs = s.split('').reduce((a,i) => i.charCodeAt(0) >= 110 ? a + 1 : a + 0, 0 )
  let len = s.length
  
  return `${errs}/${len}`
}