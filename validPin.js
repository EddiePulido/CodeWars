function validatePIN (pin) {
  if((pin.length != 4 && pin.length != 6) || isNaN(pin)) return false
  
  if(pin.includes('.') || pin.includes('-')) return false
  
  return true
}