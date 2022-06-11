String.prototype.toJadenCase = function () {
  //...
  
  let arr = this.split(' ')
  
  return arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};