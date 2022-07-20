function charFreq(message) {
  let hash = {}
  message.split('').forEach(c => hash[c] = ++hash[c] || 1)
  
  return hash
}