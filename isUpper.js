String.prototype.isUpperCase = function() {
  for(let i = 0; i < this.length; i++){
    if(this[i].toUpperCase() !== this[i]) return false
  }
  
  return true
}