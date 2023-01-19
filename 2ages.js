function getAges(sum,diff){
  if(sum < 0 || diff < 0) return null
  const older = sum/2 + diff/2
  const younger = sum/2 - diff/2
  return older >= 0 && younger >= 0 ? [older, younger] : null
};