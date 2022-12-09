var isAnagram = function(s, t) {
  let arr = new Array(26).fill(0)
  for(c of s) arr[c.charCodeAt()-97]++
  for(c of t) arr[c.charCodeAt()-97]--
  
  return arr.join('') === '0'.repeat(26)
};