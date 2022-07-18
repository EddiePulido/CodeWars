const anagrams = (s1, s2) => {
  let one = [...s1].sort().join('')
  let two = [...s2].sort().join('')
  
  return one === two
};
