function fuelPrice(litres, pricePerLitre) {
  const price = litres * pricePerLitre
  const discount = Math.min((Math.floor(litres/2) * .05), .25)
  
  return +(price - (discount * litres)).toFixed(2)
}