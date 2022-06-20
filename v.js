function validateCode (code) {
  switch(code.toString()[0]){
      case '1':
      case '2':
      case '3':
        return true
      default:
        return false
  }
}