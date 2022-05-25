function validatePIN (pin) {
  //return true or false
  let reg = /^(\d{4}|\d{6})$/
  
  return reg.test(pin)
}