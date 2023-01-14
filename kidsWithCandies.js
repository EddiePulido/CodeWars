var kidsWithCandies = function(candies, extra) {
  const largest = Math.max(...candies)
  return candies.map(kid => kid + extra >= largest ? true : false)
};