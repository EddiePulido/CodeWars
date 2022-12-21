var averageValue = function(nums) {
  const evens = nums.filter(e => !(e % 2) && !(e % 3))
  return evens.length ? Math.floor(evens.reduce((a,c) => a + c, 0) / evens.length) : 0
};