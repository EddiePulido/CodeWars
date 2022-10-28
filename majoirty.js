/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const hash = nums.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  
  return Object.entries(hash)
              .filter(a => a[1] > nums.length / 2)[0][0]
};