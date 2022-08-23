function personalise( campaign, person){
  console.log({campaign, person})
  let str = campaign
  while(str.indexOf('<NAME>') != -1 || str.indexOf('<CITY>') != -1
        || str.indexOf('<FAVOURITE PRODUCTS>') !== -1){
    str = str.replace('<NAME>', person.name)
    str = str.replace('<CITY>', person.city)
    str = str.replace('<FAVOURITE PRODUCTS>', person.favourite_products)
    
  }
  
  return str
}