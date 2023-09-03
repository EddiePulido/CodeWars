function anagramDifference(word1, word2) {
  let count = 0

  const freq1 = new Array(26).fill(0)
  const freq2 = new Array(26).fill(0)

  for(c of word1) freq1[c.charCodeAt() - 97]++
  for(c of word2) freq2[c.charCodeAt() - 97]++

  for(let i = 0; i < 26; i++) {
      count += Math.abs(freq1[i] - freq2[i])
  }

  return count
}