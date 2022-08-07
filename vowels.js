String.prototype.vowel = function() {
  const v = ['a','e','i','o','u']
  
  return v.includes(this.toLowerCase())  
};