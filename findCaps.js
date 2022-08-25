function capital(capitals){
  let result = []
  
  capitals.forEach(l => {
//     let isCountry = 'country' in l
    let location = l['country'] || l['state']
    result.push(`The capital of ${location} is ${l['capital']}`)
  })
  
  return result
}