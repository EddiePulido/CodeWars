//return price without vat
function excludingVatPrice(price){
  return price != null ? +(price * 100 / 115).toFixed(2) : -1
}