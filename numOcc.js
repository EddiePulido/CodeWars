Array.prototype.numberOfOccurrences = function() {
  const arg = (arguments[0])
  return this.filter(n => n === arg).length
}