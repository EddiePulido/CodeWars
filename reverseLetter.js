function reverseLetter(str) {
  //coding and coding..
  return str.split('').filter(c => c.charCodeAt() - 96 >= 1 && c.charCodeAt() - 96 <= 26).reverse().join('')
}