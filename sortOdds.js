function sortArray(array) {
  let odds = array.filter(n => n%2).sort((a,b) => b - a)
  
  return array.map(n => n%2 ? odds.pop() : n)
}