const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins)
  
  return answer === Infinity ? -1 : answer
}

const _minChange = (amount, coins, memo={}) => {
  if(amount in memo) return memo[amount]
  if(amount === 0) return 0
  if(amount < 0) return Infinity
  
  let minCoins = Infinity
  for(const coin of coins){
    const numCoins = 1 + _minChange(amount - coin, coins, memo)
    minCoins = Math.min(minCoins, numCoins)
  }
  
  
  memo[amount] = minCoins
  
  return minCoins
}