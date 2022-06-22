function calculateTip(amount, rating) {
  let r = rating.toLowerCase()
  
  switch(r){
      case 'excellent':
        return Math.ceil(amount * .2)
      case 'great':
        return Math.ceil(amount * .15)
      case 'good':
        return Math.ceil(amount * .1)
      case 'poor':
        return Math.ceil(amount * .05)
      case 'terrible':
        return 0
      default:
        return 'Rating not recognised'
  }
}