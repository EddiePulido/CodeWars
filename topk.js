/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const result = []
  const hash = {}
  
  for(n of nums){
      hash[n] = ++hash[n] || 1
  }
  
  let sorted = Object.entries(hash).sort((a,b) => b[1] - a[1])
  
  return sorted.map(e => e[0]).slice(0,k)
  
};