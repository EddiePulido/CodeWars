const anagrams = (s1, s2) => {
  let bucket = new Array(26).fill(0)

  for(c of s1) bucket[c.charCodeAt() - 97]++
  
  for(c of s2) bucket[c.charCodeAt() - 97]--
  
  return bucket.join('') === '0'.repeat(26)
}

const anagrams = (s1, s2) => {
  if(s1.length !== s2.length) return false
  
  const arr = new Array(26).fill(0)

  for(let i = 0; i < s1.length; i++){
    const a = s1[i].charCodeAt() - 97
    const b = s2[i].charCodeAt() - 97
    
    arr[a]++
    arr[b]--
  }

  return arr.every(e => e === 0)
};