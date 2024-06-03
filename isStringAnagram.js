/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  if(words.length !== s.length) return false
  
  return words.every((e,i) => e[0] === s[i])
};