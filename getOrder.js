function getOrder(input) {
  const cap = word => word[0].toUpperCase() + word.slice(1).toLowerCase()
  const hash = {
    'burger' : 1,
    'fries' : 2,
    'chicken' : 3,
    'pizza' : 4,
    'sandwich' : 5,
    'onionrings' : 6,
    'milkshake' : 7,
    'coke' : 8
  }
  
  let i = 0
  let j = 1
  const arr = []
  
  while(j < input.length){
    let currWord = input.slice(i,j++ + 1)
    if(hash[currWord]){
      arr.push(cap(currWord))
      i = j
      j++
    }
  }
  
  arr.sort((a,b) => hash[a.toLowerCase()] - hash[b.toLowerCase()] )
  return arr.join(' ')
}