function giveChange(amount) {
  
  let [one, five, ten, twenty, fifty, hundred] = [0,0,0,0,0,0]
  
  if(amount >= 100){
    hundred = Math.floor(amount / 100)
    amount = amount % 100
  }
  if(amount >= 50){
    fifty = Math.floor(amount / 50)
    amount = amount % 50
  }
  if(amount >= 20){
    twenty = Math.floor(amount / 20)
    amount = amount % 20
  }
  if(amount >= 10){
    ten = Math.floor(amount / 10)
    amount = amount % 10
  }
  if(amount >= 5){
    five = Math.floor(amount / 5)
    amount = amount % 5
  }
  one = amount
  
  return [one,five,ten, twenty, fifty,hundred]
}