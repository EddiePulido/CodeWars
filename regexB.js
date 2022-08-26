String.prototype.digit = function() {
  let str = this.toString()
  if(str.length === 0) return false
  let digits = '0123456789'
  return digits.includes(str)
};