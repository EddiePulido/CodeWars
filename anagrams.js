const anagrams = (s1, s2) => {
  let bucket = new Array(26).fill(0)

  for(c of s1) bucket[c.charCodeAt() - 97]++
  
  for(c of s2) bucket[c.charCodeAt() - 97]--
  
  return bucket.join('') === '0'.repeat(26)
}
