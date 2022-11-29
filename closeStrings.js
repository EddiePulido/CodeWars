var closeStrings = function(word1, word2) {
  if(word1.length != word2.length) return false;

  let hash1 = [...word1].reduce((a,c)=>(a[c]=++a[c] || 1, a), [])
  let hash2 = [...word2].reduce((a,c)=>(a[c]=++a[c] || 1, a), [])

  let h1Keys = Object.keys(hash1).sort().join('')
  let h2Keys = Object.keys(hash2).sort().join('')
  let h1Vals = Object.values(hash1).sort().join('')
  let h2Vals = Object.values(hash2).sort().join('')

  return h1Keys === h2Keys && h1Vals === h2Vals 
};
