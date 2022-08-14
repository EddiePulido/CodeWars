function mostFrequentItemCount(collection) {
  const hash = {}
  
  collection.forEach(n => hash[n] = ++hash[n] || 1)
  
  return Math.max(...Object.values(hash), 0)
}