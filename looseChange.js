function looseChange(cents){
  cents = parseInt(cents)
  let coins = {'Nickels' : 0,'Pennies':0,'Dimes':0,'Quarters':0}
  if(cents <= 0) return coins
  if(cents >= 25){
    coins.Quarters = Math.floor(cents / 25)
    cents %= 25
  }
  if(cents >= 10){
    coins.Dimes = Math.floor(cents / 10)
    cents %= 10
  }
  if(cents >= 5){
    coins.Nickels = Math.floor(cents / 5)
    cents %= 5
  }
  
  coins.Pennies = cents

  return coins
}